import { Module } from '@nestjs/common';
import { TaskModule } from './Tasks/task.module';

@Module({
    imports: [TaskModule]
})
export class ModulesModule { }