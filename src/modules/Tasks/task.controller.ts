import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';
@Controller({
    version: '1'
})
export class TaskController {

    constructor(private taskService: TaskService){
    }

    @Get('/all')
    getAll(): string {
        return this.taskService.getTasks();
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} 📄`;
    }
}