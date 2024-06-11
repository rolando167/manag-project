import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {

    getTasks(): any {
        return ['task 1', 'task 2', 'task 3']
    }

    findOne(id: string): string {
        return `This action returns a #${id} 📄 2024`;
    }

    create(): string{
        return 'creando tareas';
    }

    updateAll(): string{
        return 'Actualizando TODA la tarea';
    }

    delete(): string{
        return 'Eliminando tareas';
    }

    update(): string{
        return 'Actualizando SOLO algun campo de la tarea';
    }
};