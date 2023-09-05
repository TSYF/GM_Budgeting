export class Transaction {
    public constructor(private _amount: number, private _subject: string = "") {}

    
    public get amount(): number {
        return this._amount;
    }

    
    public get subject(): string {
        return this._subject;
    }
    
    /**
     * add
     */
    public add(other: Transaction): Transaction {
        const result = this._amount + other._amount;
        return new Transaction(result);
    }
}