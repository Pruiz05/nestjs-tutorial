import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksService } from './task.service';

@Module({
    controllers: [TaskController],
    providers: [TasksService]
})
export class TaskModules { }
