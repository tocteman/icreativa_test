import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity'

@Injectable()
export class TodosService {
  
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ){}

  create(createTodoDto: CreateTodoDto) {
    const changeset = this.todoRepository.create(createTodoDto)  
    return this.todoRepository.save(changeset)
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id:number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto)
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
