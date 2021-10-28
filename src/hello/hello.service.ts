import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { HelloRecord } from "src/database/entities/hello-record.entity";
import { Repository } from "typeorm";
// import { v4 as uuid } from "uuid";

@Injectable()
export class HelloService {
  // db: {id: string, message: string}[] = [];
  // db: {id: string, message: string}[] = [
  //   {id: "1", message: "hello"},
  //   {id: "2", message: "this"},
  //   {id: "3", message: "is"},
  //   {id: "4", message: "a"},
  //   {id: "5", message: "test"},
  //   {id: "6", message: "lol"},
  // ];
  constructor(
    @InjectRepository(HelloRecord) private helloRecordRepo: Repository<HelloRecord>,
  ) {}

  async findById(id: string) {
    // return this.db.find(element => element.id == id);
    return await this.helloRecordRepo.findOneOrFail({id});
  }

  async create(msg: string, ip: string) {
    // const id = uuid();
    // console.log(id);
    // const element = {id, message};
    // this.db.push(element);
    // return element;
    const newMsg = this.helloRecordRepo.create({msg, from: ip});
    return await this.helloRecordRepo.save(newMsg);
  }

  async deleteById(id: string) {
    // this.db.filter(function(element) {
    //   return element.id != id;
    // });
    // return `Delete node ${id} from db`;
    return await this.helloRecordRepo.delete({id});
  }

  getHello(arg: string) {
    return `hello for ${arg}`;
  }
}