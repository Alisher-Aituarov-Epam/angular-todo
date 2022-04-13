import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() data!: Todo;
  @Input() toggle!: (id: number) => void; 

  constructor() { }

  ngOnInit(): void {
  }

}
