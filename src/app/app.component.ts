import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name: string;
  paymentDate: string;
  amount: number;

  onNameChange(value: string){
    this.name =  value;
  }

  onDateChange(value: string){
    this.paymentDate =  value;
  }

  onAmountChange(value: string){
    this.amount =  parseInt(value);
  }
}
