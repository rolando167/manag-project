import { Controller, Get, Query } from "@nestjs/common";
import { ValidateuserPipe } from "./pipes/validateuser.pipe";

@Controller({
    version: '1'
})
export class UserController {
    @Get('greet')
    // @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
      console.log(typeof query.age);
      console.log(typeof query.name);
      return `Hello ${query.name}, you are ${query.age + 30} years old`;
    }
}