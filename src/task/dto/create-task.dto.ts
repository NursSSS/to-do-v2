import { Length } from "class-validator";

export class CreateTaskDto{
    @Length(3, 20)
    title: string

    @Length(0, 30)
    description?: string
}