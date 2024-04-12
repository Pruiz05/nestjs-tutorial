import { Body, Controller, Get, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('tasks')
@ApiTags('tasks')
export class TaskController {
    tasksService: TasksService

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService

    }

    @Get()
    @ApiOperation({
        summary: 'get all tasks'
    })
    @ApiResponse({
        status: 200,
        description: 'return all tasks'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden'
    })
    getAllTasks() {
        return this.tasksService.getTasks()
    }

    @Get('/:id')
    getTask() {
        return this.tasksService.getTasks()
    }

    @Post()
    @ApiOperation({
        summary: 'create task'
    })
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.getTasks()
    }


    @Put()
    updateTask() {
        return this.tasksService.getTasks()
    }


    @Get()
    DeleteTask() {
        return this.tasksService.getTasks()
    }
}