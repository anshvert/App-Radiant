import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User,UserDocument } from './schemas/users.schema'

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private readonly userModel:Model<UserDocument>) {}

    async getUsers(){
        const all_users = await this.userModel.find({})
        return all_users
    }

    async userExists(email){
        const email_exists = await this.userModel.find({
            email:email
        })
        if (email_exists.length){
            return {success:true}
        }
        return{success:false}        
    }   
    
    async passwordMatch(data){
        const user = await this.userModel.find({
            email:data.email,
            password:data.password
        })
        if (user.length){
            return {
                success:true,
                data:user
            }
        }
        return {success:false}
    }

    async validUser(body){
        const user_exists = await this.userExists(body.email)
        const password_match = await this.passwordMatch(body)

        if (!user_exists.success){
            return {
                success:false,
                message:"This email doesn't exist. Try creating a new user."             
            }
        }
        if (!password_match.success){
            return {
                success:false,
                message:"Password didn't match. Check again."               
            }
        }
        return {success:true,data:password_match.data}
    }
    async loginUser(body){
        const user = await this.validUser(body)
        if (!user.success){
            return {
                success:user.success,
                data:{
                    message:user.message
                }
            }
        }
        return user
    }

    async adduser(user_body){
        const user_exists = await this.userExists(user_body.email)
            
        if (!user_exists){

            const user = new this.userModel(user_body)
            await user.save()

            return {
                success:true,
                message:"User Added Successfully"
            }
        }
        return {
            success:false,
            message:"User already exists. Try a different email"
        }
    }
    
    async updateUser(user_req,user_body){
        const user_exists = await this.userExists(user_req.query.email)

        if (user_exists){
            
            const result = await this.userModel.updateOne({email:user_req.query.email},{...user_body})

            if (result.acknowledged){
                return 'User updated'
            }
            return 'User updated failed'

        }
        return 'User does not exists'
    }

    async deleteUser(user_req){
        const user_exists = await this.userExists(user_req.query.email)

        if (user_exists){

            const result = await this.userModel.deleteOne({email:user_req.query.email})

            if (result.acknowledged){
                return 'User deleted'
            }
            return 'User deletion failed'
        }
        return 'User does not exists'
    }       
}