import { AuthModule } from "./Auth/auth.module";
import { TaskModule } from "./Tasks/task.module";

export const modulesRoutes = [
    {
        path: 'tasks',
        module: TaskModule
    }, {
        path: 'auth',
        module: AuthModule
    }
];