import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Prop } from "@nestjs/mongoose";

export class UserDTO  {

    @IsOptional()
    @IsString()
    name?: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsOptional()
    @IsString()
    password?: string;

    @IsOptional()
    @IsString()
    profileImage?: string;
}
