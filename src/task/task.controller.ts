import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { findById, UpdateTaskDto } from './dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private service: TaskService){}

    @Get()
    async findAll(){
        return await this.service.findAll()
    }

    @Post()
    async create(@Body() dto: CreateTaskDto){
        return await this.service.create(dto)
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.service.findOne(id)
    }


    @Put(':id')
    async update(@Param('id') { id }: findById, dto: UpdateTaskDto) {
        return await this.service.update(id, dto)
    }

    @Delete(':id')
    async delete(@Param('id') { id }: findById){
        return await this.service.delete(id)
    }
}