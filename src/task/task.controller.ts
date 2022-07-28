import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private service: TaskService){}

    @Get('findAll')
    async findAll(){
        return await this.service.findAll()
    }

    @Post()
    async create(@Body() dto: CreateTaskDto){
        return await this.service.create(dto)
    }
}