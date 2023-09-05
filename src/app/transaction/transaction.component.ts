import { Component, Input } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  @Input()
  public subject: string;

  @Input()
  public amount: number;

  @Input()
  public key: string;

  public constructor(private transactionService: TransactionService) {}

  public popTransaction(id: string): void {
    this.transactionService.deleteTransaction(id);
  }
}
