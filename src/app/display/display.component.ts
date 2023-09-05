import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  public balance: number;
  
  public constructor(private transactionService: TransactionService) {
    this.transactionService.transactionMade
      .subscribe(balance => this.balance = balance);
    
  }

  // public get balance(): number {
  //   return this.transactionService.balance;
  // }

  public get earnings(): number {
    return this.transactionService.sumEarnings();
  }

  // public get earningsPercentage(): number {
  //   return this.earnings / this.transactionService.balance;
  // }

  public get expenses(): number {
    return this.transactionService.sumExpenses();
  }

  public get expensesPercentage(): number {
    return +(this.expenses / this.earnings).toFixed(2);
  }
}
