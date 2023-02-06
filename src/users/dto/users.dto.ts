import { isNotEmpty, IsNotEmpty, IsString } from 'class-validator';


export class UserDTO  {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}