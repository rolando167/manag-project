import { Module } from '@nestjs/common';
import { ModulesModule } from './modules';
import { RouterModule } from '@nestjs/core';
import { appRoutes } from './app.routes';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
    imports: [
        ModulesModule,
        RouterModule.register(appRoutes),
    ],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule { }
