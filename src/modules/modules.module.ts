import { Module } from '@nestjs/common';
import { TaskModule } from './Tasks/task.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
    imports: [TaskModule, PaymentsModule]
})
export class ModulesModule { }