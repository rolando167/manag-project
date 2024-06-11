import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
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
        return this.taskService.findOne(id);
    }

    @Post('create')
    create(){
        return this.taskService.create();
    }

    @Put('update')
    updateAll(){
        return this.taskService.updateAll();
    }

    @Delete('delete/:id')
    delete(){
        return this.taskService.delete();
    }

    @Patch('update')
    update(){
        return this.taskService.update();
    }
}