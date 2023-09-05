import { Component } from '@angular/core';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ TransactionService ]
})
export class AppComponent {
  title = 'presupuesto-app';

  public constructor(private transactionService: TransactionService) {}

  public get expenses() {
    return this.transactionService.expenses;
  }

  public get earnings() {
    return this.transactionService.earnings;
  }
}
