class SpecialAccount {
  private balance: number;

  deposit(value: number): void {
    this.balance += value + 10;
  }
}

export { SpecialAccount };
