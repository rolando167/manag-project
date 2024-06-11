import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService {

    getTasks(): any {
        return ['task 1', 'task 2', 'task 3']
    }
};