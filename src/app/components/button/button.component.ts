import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() text: string | undefined;
    @Input() color:string | undefined; 
    @Output() btnClick = new EventEmitter();
    constructor() { }
    ngOnInit(): void {
    }
    onClick(){
      this.btnClick.emit();
      console.log("click now");
    }
}
