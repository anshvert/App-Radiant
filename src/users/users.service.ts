import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User,UserDocument } from './schemas/users.schema'

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private readonly userModel:Model<UserDocument>) {}

    async getusers(){
        const all_users = await this.userModel.find({})
        return all_users
    }

    async userExists(email){
        const email_exists = await this.userModel.find({
            email:email
        })
        if (email_exists.length){
            return true
        }
        return false        
    }   
    
    async passwordMatch(data){
        const user = await this.userModel.find({
            email:data.email,
            password:data.password
        })
        if (user.length){
            return true
        }
        return false    
    }

    async loginUser(body){
        
        const user_exists = await this.userExists(body.email)
        const password_match = await this.passwordMatch(body)
        
        if (!user_exists){
            return {
                success:false,
                message:"This email doesn't exist. Try creating a new user."
            }
        }
        if (!password_match){
            return {
                success:false,
                message:"Password didn't match. Check again."
            }
        }
        return {
            success:true
        }
    }

    async adduser(user_body){
        const user_exists = await this.userExists(user_body.email)
            
        if (!user_exists){

            const user = new this.userModel(user_body)
            user.save()

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
    
    async updateuser(user_req,user_body){
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

    async deleteuser(user_req){
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