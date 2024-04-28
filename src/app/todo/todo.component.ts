import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  title='';
  comment='';
  todos:Todo[]=[];

  onsubmit(){
    const todo=new Todo(this.todos.length+1,this.title!,this.comment!,true);
    this.todos.push(todo)
  }

  close(id:number){
    let todo=this.todos.filter(item=>item.id==id)[0]
    const index=this.todos.indexOf(todo);
    todo.enabled=false;
    this.todos[index]=todo

  }
}
