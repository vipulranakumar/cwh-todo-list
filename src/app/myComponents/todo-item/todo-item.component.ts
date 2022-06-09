import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo : Todo;
  @Input() i : Number;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(todo : Todo){
    this.todoDelete.emit(todo);
    //alert('Delete Button Clicked '+todo.sno);
  }
  onCheckboxClick(todo : Todo){
    this.todoCheck.emit(todo);
  }

}
