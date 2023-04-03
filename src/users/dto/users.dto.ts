import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


export class UserDTO  {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}