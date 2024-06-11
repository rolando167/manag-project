import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()
    @Max(100)
    age:number;
}