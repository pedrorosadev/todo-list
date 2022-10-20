import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './tasks/entities/tasks.entity';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_todolist',
      entities: [Tasks],
      synchronize: true
    }),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
