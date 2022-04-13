import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Input() label!: string;
  @Input() onChange!: (event: Event) => void;
  @Input() onSubmit!: (event: Event) => void;
  @ViewChild('input') inputRef!: ElementRef; 
  
  constructor() { }
  onSubmitWithClear = (event: Event) => {
    this.inputRef.nativeElement.value = '';
    this.onSubmit(event)
  }
  ngOnInit(): void {
  }
}
