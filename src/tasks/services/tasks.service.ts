import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Tasks } from "../entities/tasks.entity";

@Injectable()
export class TasksService{
    constructor(
        @InjectRepository(Tasks)
        private tasksRepository: Repository<Tasks>        
    ){}

    async findAll():Promise<Tasks[]>{
        return await this.tasksRepository.find()
    }

    async findById(id:number):Promise<Tasks>{
        return await this.tasksRepository.findOne({
            where: {
                id
            }
        })
    }

    async create(tasks: Tasks):Promise<Tasks>{
        return await this.tasksRepository.save(tasks);
    }

    async update(tasks: Tasks): Promise<Tasks>{
        let searchTasks: Tasks = await this.findById(tasks.id);
        
        if(!searchTasks || !tasks.id)
        throw new HttpException('Tarefa não encontrada', HttpStatus.NOT_FOUND)

        return await this.tasksRepository.save(tasks);
    }

    async delete(id:number):Promise<DeleteResult>{
        let searchTasks = await this.findById(id);

        if(!searchTasks)
        throw new HttpException('Tarefa não encontrada', HttpStatus.NOT_FOUND);

        return await this.tasksRepository.delete(id);
    }
}