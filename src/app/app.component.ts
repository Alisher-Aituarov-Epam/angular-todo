import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  public input: string = '';
  public todos: Todo[] = [
    {
      title: 'Walk the dog',
      completed: false,
      id: 1
    },
    {
      title: 'Do the dishes',
      completed: true,
      id: 2
    }
  ];
  onAddTodo = () => {
    if(!this.input) return;
    this.todos.push({
      id: Math.random(),
      title: this.input,
      completed: false  
    })
    this.input = ''
  }
  onChange = (event: Event) => {
    this.input = (event.target as HTMLInputElement ).value
  }
  toggle = (id: number) => {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }
}
