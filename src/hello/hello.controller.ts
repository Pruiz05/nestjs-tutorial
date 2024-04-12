import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';


@Controller()
export class HelloController {
    @Get('/hello')
    index(@Req() request: Request) {
        return 'Home Page'
    }

    @Get('new')
    @HttpCode(201)
    something() {
        return 'Something new'
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found'
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 1
    }


    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error not found'
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        return status
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number}) {
        return `Hello ${query.name}, you are ${query.age} years old.`
    }
}
