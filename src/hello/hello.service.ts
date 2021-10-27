import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";

@Injectable()
export class HelloService {
  // db: {id: string, message: string}[] = [];
  db: {id: string, message: string}[] = [
    {id: "1", message: "hello"},
    {id: "2", message: "this"},
    {id: "3", message: "is"},
    {id: "4", message: "a"},
    {id: "5", message: "test"},
    {id: "6", message: "lol"},
  ];

  async findById(id: string) {
    return this.db.find(element => element.id == id);
  }

  async create(message: string) {
    const id = uuid();
    console.log(id);
    const element = {id, message};
    this.db.push(element);
    return element;
  }

  async deleteById(id: string) {
    this.db.filter(function(element) {
      return element.id != id;
    });
    return `Delete node ${id} from db`;
  }
}