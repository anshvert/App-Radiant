import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TodoDTO {

  @IsString()
  title:string

  @IsEmail()
  email:string

  @IsOptional()
  desciption?:string

  @IsBoolean()
  completed:boolean
}