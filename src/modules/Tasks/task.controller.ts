import { Controller, Get, Param } from '@nestjs/common';
@Controller({
    version: '1'
})
export class TaskController {

    @Get()
    getAll(): string {
        return "Obteniendo todas la tareas 😄"
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} 📄`;
    }
}