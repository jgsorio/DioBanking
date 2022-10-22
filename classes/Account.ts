abstract class Account {
  private accountNumber: number;
  private name: string;
  private balance: number = 0;

  constructor(accounNumber: number, name: string) {
    this.accountNumber = accounNumber;
    this.name = name;
  }

  deposit(value: number) {
    this.balance += value;
  }

  withdraw(value: number) {
    if (this.balance - value <= 0) {
      console.log("You don't have balance");
      return;
    }
    this.balance -= value;
  }

  getBalance(): number {
    return this.balance;
  }
}

export { Account };
