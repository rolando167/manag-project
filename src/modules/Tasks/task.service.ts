import { Injectable } from "@nestjs/common";
import { GetTaskDto } from "./Dto/get-task.dto";

@Injectable()
export class TaskService {

    getTasks(): GetTaskDto[] {
        const allTasks : GetTaskDto[] = [
            {"title": "Test", "description": "Des", "created_at": "11-2024", "created_by": 1, "status": "False"}
        ];
        return allTasks;
    }

    findOne(id: string): GetTaskDto {
        const task : GetTaskDto = {"title": "Test 44", "description": "Desc 2", "created_at": "04-2024", "status": "False"}
        return task;
    }

    create(task: any): string {
        console.log(task);
        return `This action returns a    📄 2024`;;
    }

    updateAll(): string {
        return 'Actualizando TODA la tarea';
    }

    delete(): string {
        return 'Eliminando tareas';
    }

    update(): string {
        return 'Actualizando SOLO algun campo de la tarea';
    }
};