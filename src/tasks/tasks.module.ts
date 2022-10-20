import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksController } from "./controllers/tasks.controller";
import { Tasks } from "./entities/tasks.entity";
import { TasksService } from "./services/tasks.service";

@Module({
    imports:[TypeOrmModule.forFeature([Tasks])],
    controllers: [TasksController],
    providers: [TasksService],
    exports: [TypeOrmModule]
})

export class TasksModule{}