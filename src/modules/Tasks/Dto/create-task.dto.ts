import { IsString, IsInt, MinLength } from 'class-validator';
// create-Task-dto
export class CreateTaskDto {

    @IsString()
    @MinLength(1)
    title: string;

    description?: string;
    created_at: string;

    @IsInt()
    created_by: number;
}