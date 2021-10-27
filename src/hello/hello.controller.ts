import {Controller, Logger, Get, NotFoundException, Param, Post, Body, UseGuards} from "@nestjs/common";
import {HelloBodyDTO} from "./hello-body.dto";
import {v4 as uuid} from "uuid";
import {HelloService} from "./hello.service";
import {AuthGuard} from "../auth.guard";

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
      let message = hello.message;
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
  saveHello(@Body() body: HelloBodyDTO) {
    console.log(body);
    try {
      const id = uuid();
      const hello = {id, message: body.message};
      this.helloService.create(hello.message);
    } catch(error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }
}