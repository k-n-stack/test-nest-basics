import {Controller, Logger, Get, NotFoundException, Param, Post, Body, UseGuards, Req} from "@nestjs/common";
import {HelloBodyDTO} from "./hello-body.dto";
import {v4 as uuid} from "uuid";
import {HelloService} from "./hello.service";
import {AuthGuard} from "../auth.guard";
import { Request } from "express";

@Controller()
export class HelloController {

  // a logger from nestjs for loggin error/info
  logger: Logger = new Logger(HelloController.name);

  constructor(private readonly helloService : HelloService) {}

  @Get('hello')
  async replyHello() {
    try {
      return 'hello';
    } catch(error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }

  @Get('hello/:helloId') // dynamic parameter
  async replyExactHello(@Param('helloId') id: string) {
    try {
      let hello = await this.helloService.findById(id);
      let message = hello.msg;
      if(!message) {
        throw new NotFoundException('desired `hello` not found'); // 404
      }
      return message;
    } catch(error) {
      this.logger.error(error?.massage ?? '');
      throw error;
    }
  }

  @Get('restricted-data')
  @UseGuards(AuthGuard)
  async getRestrictedData() {
    return 'restricted data is protected by a guard';
  }

  @Post('hello')
  async saveHello(@Body() body: HelloBodyDTO, @Req() req: Request) {
    console.log(body);
    try {
      // const id = uuid();
      // const hello = {id, message: body.message};
      return await this.helloService.create(body.message, req.ip);
    } catch(error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }
}