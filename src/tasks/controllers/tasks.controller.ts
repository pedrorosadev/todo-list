import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Tasks } from "../entities/tasks.entity";
import { TasksService } from "../services/tasks.service";


@Controller('/tarefas')
export class TasksController{
    constructor(private readonly tasksService: TasksService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Tasks[]>{
        return this.tasksService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number):Promise<Tasks>{
        return this.tasksService.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() tasks: Tasks) : Promise<Tasks>{
        return this.tasksService.create(tasks);
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    update(@Body() tasks: Tasks):Promise<Tasks>{
        return this.tasksService.update(tasks);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id:number){
        
        return this.tasksService.delete(id);
    }
}