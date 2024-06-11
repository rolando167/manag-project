import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { ValidateuserPipe } from "./pipes/validateuser.pipe";
import { AuthGuard } from "./Guards/auth.guard";

@Controller({
    version: '1'
})
export class UserController {

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
        console.log(typeof query.age);
        console.log(typeof query.name);
        return `Hello ${query.name}, you are ${query.age + 30} years old`;
    }
}