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
    let changeset = this.todoRepository.create(createTodoDto)  
    return this.todoRepository.save(changeset)
  }

  findOne(id) {
    return this.todoRepository.findOne({
      where: { id }
    })
  }

  findAll() {
    return this.todoRepository.find()
  }

  update(id:number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto)
  }

  remove(id: number) {
    return this.todoRepository.softDelete(id)
  }
}
