import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { LoggerMiddleware } from './Middlewares/logger.middleware';
import { AuthMiddleware } from './Middlewares/auth.middleware';

@Module({
    controllers: [UserController]
})

export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: '/users', method: RequestMethod.GET },
        {
          path: '/users',
          method: RequestMethod.POST,
        },
      )
      .apply(AuthMiddleware)
      .forRoutes('users');
    }
}