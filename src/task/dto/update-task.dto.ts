import { IsBoolean, IsOptional, Length } from "class-validator";

export class UpdateTaskDto {
    @Length(3, 20)
    title: string

    @Length(0, 30)
    description?: string

    @IsBoolean()
    @IsOptional()
    isComplete?: boolean
}