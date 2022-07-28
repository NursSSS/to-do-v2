import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './entity/task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        private readonly entity: Repository<TaskEntity>,
    ) {}

    async findAll(){
        return await this.entity.find()
    }

    async create(dto: CreateTaskDto){
        return await this.entity.create(dto)
    }


}
