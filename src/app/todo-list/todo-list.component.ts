// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-todo-list',
//   templateUrl: './todo-list.component.html',
//   styleUrls: ['./todo-list.component.css']
// })
// export class TodoListComponent {

// }
import { Component } from '@angular/core';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoItems: Todo[] = [
    {
      id: 1,
      task: 'Complete assignment',
      completed: false,
      dueDate: new Date('2023-07-15'),
    },
    {
      id: 2,
      task: 'Read a book',
      completed: true,
      dueDate: new Date('2023-07-16'),
    },
    {
      id: 3,
      task: 'Go for a run',
      completed: false,
      dueDate: new Date('2023-07-17'),
    },
    {
      id: 4,
      task: 'Write a blog post',
      completed: true,
      dueDate: new Date('2023-07-18'),
    },
    {
      id: 5,
      task: 'Attend a meeting',
      completed: false,
      dueDate: new Date('2023-07-19'),
    }
  ];;

  newTodo: Todo = {} as Todo;

  addTodo(): void {
    if (this.newTodo.task && this.newTodo.dueDate) {
      const newId = this.todoItems[this.todoItems.length - 1].id + 1;
      const todo: Todo = {
        id: newId,
        task: this.newTodo.task,
        completed: false,
        dueDate: new Date(this.newTodo.dueDate),
      };
      this.todoItems.push(todo);
      this.newTodo = {} as Todo;
    }
  }

  updateTodoStatus(todo: Todo): void {
    for (let i = 0; i < this.todoItems.length; i++) {
      if (this.todoItems[i].id == todo.id) {
        this.todoItems[i].completed = !todo.completed;
        break;
      }
    }
  }

  deleteTodo(todo: Todo): void {
    this.todoItems = this.todoItems.filter((item) => item.id != todo.id);
  }
}
