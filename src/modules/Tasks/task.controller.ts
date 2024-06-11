import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Req, Res } from '@nestjs/common';
import { TaskService } from './task.service';

import { Request, Response } from 'express';
import { CreateTaskDto } from './Dto/create-task.dto';

@Controller({
    version: '1'
})
export class TaskController {

    constructor(private taskService: TaskService) {
    }

    @Get('/all')
    getAll(@Res() res: Response): void {
        res.status(HttpStatus.OK).json(this.taskService.getTasks());
    }

    @Get(":id")
    findOne(@Param('id') id: string, @Res() res: Response): void {
        const task = this.taskService.findOne(id) || null;
        res.status(HttpStatus.CREATED).json({
            task
        });
    }

    @Post('create')
    create(@Req() req: Request, @Res() res: Response, @Body() task: CreateTaskDto): void {
        console.log(req.url);
        this.taskService.create(task);
        res.status(HttpStatus.CREATED).json({
            "message": "Task creada!!"
        });
    }

    @Put('update')
    updateAll(): string {
        return this.taskService.updateAll();
    }

    @Delete('delete/:id')
    delete(): string {
        return this.taskService.delete();
    }

    @Patch('update')
    update(): string {
        return this.taskService.update();
    }
}