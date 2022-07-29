import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { findById, UpdateTaskDto } from './dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './entity/task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly entity: Repository<TaskEntity>,
    ) {}

    async findAll() {
        return await this.entity.find()
    }

    async create(dto: CreateTaskDto) {
        return await this.entity.save(dto)
    }

    async findOne(options?): Promise<TaskEntity | null> {
        const task = await this.entity.findOne({
            where: [
                { id: options }
            ]
        })

        if(!task){
            throw new NotFoundException()
        }

        return task
    }

    async update(options, dto: UpdateTaskDto){
        const task = await this.entity.findOne({
            where: [
                { id: options }
            ]
        })

        if(!task){
            throw new NotFoundException()
        }
        Object.assign(task, dto)
        return await this.entity.save(task)
    }

    async delete(options?){
        const task = await this.entity.findOne({
            where: [
                { id: options }
            ]
        })
        if(!task){
            throw new NotFoundException()
        }

        await this.entity.delete(task)
        return { messsage: 'Task succesfully deleted' }
    }
}
