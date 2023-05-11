import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class TodoDTO {

  @IsString()
  title:string

  @IsEmail()
  email:string

  @IsOptional()
  description?:string

  @IsBoolean()
  completed:boolean
}