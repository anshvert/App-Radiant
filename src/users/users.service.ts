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

    async userexists(email){
        
        const email_exists = await this.userModel.find({
            email:email
        })
        return email_exists
    }   
    
    async adduser(user_body){
        
        const user_exists = await this.userexists(user_body.email)
            
        if (!user_exists.length){

            const user = new this.userModel(user_body)
            user.save()

            return 'User added'
        }
        return 'User already exists with this email'
    }
    
    async updateuser(user_req,user_body){

        const user_exists = await this.userexists(user_req.query.email)

        if (user_exists.length){
            
            const result = await this.userModel.updateOne({email:user_req.query.email},{...user_body})

            if (result.acknowledged){
                return 'User updated'
            }
            return 'User updated failed'

        }
        return 'User does not exists'
    }

    async deleteuser(user_req){

        const user_exists = await this.userexists(user_req.query.email)

        if (user_exists.length){

            const result = await this.userModel.deleteOne({email:user_req.query.email})

            if (result.acknowledged){
                return 'User deleted'
            }

            return 'User deletion failed'
        }
        return 'User does not exists'
    }       
}