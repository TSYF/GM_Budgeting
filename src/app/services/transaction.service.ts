import { EventEmitter, Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private _balance: number;
  public transactionMade: EventEmitter<number> = new EventEmitter();
  private _earnings: Map<string, Transaction> = new Map();
  private _expenses: Map<string, Transaction> = new Map();

  constructor() { }
  
  public get balance(): number {
    return this._balance;
  }
  
  public refreshBalance(): number {
    const earnings = [...this._earnings.values()].reduce((prev, curr) => prev.add(curr), new Transaction(0));
    const expenses = [...this._expenses.values()].reduce((prev, curr) => prev.add(curr), new Transaction(0));
    this._balance = earnings.amount + expenses.amount;
    return this._balance;
  }
  
  public get earnings(): Map<string, Transaction> {
    return this._earnings;
  }
  
  public sumEarnings(): number {
    return [...this._earnings.values()].reduce((prev, curr, i) => {
      return prev.add(curr);
    }, new Transaction(0)).amount;
  }
  
  public get expenses(): Map<string, Transaction> {
    return this._expenses;
  }
  
  public sumExpenses(): number {
    return [...this._expenses.values()].reduce((prev, curr, i) => {
      return prev.add(curr);
    }, new Transaction(0)).amount;
  }
  
  public transact(transaction: Transaction): number {
    if (transaction.amount === 0) {
      return 0;
    }

    const id: string = btoa(Date.now() + transaction.amount + transaction.subject);

    if (transaction.amount > 0) {
      this._earnings.set(id, transaction);
    } else {
      this._expenses.set(id, transaction);
    }

    this.transactionMade.emit(this.refreshBalance());

    return this._balance;
  }
  
  public deleteTransaction(id: string) {
    if (this._earnings.has(id)) {
      this._earnings.delete(id);
    }

    if (this._expenses.has(id)) {
      this._expenses.delete(id);
    }
  }
}
