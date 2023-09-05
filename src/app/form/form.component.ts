import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Operations } from '../enums/operations';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public amount: number = 0;
  public operation: keyof typeof Operations = "addition";
  public subject: string = "";

  public constructor(private transactionService: TransactionService) { }

  public handleSubmit(): void {
    console.log(this);
    const transaction = new Transaction(this.amount * Operations[this.operation], this.subject);
    this.transactionService.transact(transaction)
    this.amount = 0;
    this.subject = "";
  }
}
