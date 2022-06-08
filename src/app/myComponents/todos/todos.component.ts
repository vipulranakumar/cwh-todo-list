import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor() { 
    this.todos=[
      { sno: 1, title: 'A', desc: 'aaaa', active: true },
      { sno: 2, title: 'B', desc: 'bbbb', active: true },
      { sno: 3, title: 'C', desc: 'cccc', active: true },
    ]
  }
  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
  }
}
