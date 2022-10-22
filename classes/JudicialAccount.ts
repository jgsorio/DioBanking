import { Account } from "./Account";

class JudicialAccount extends Account {
  private cnpj: number;
  private status: boolean;

  constructor(
    cnpj: number,
    accountNumber: number,
    name: string,
    status: boolean = false
  ) {
    super(accountNumber, name);
    this.cnpj = cnpj;
  }

  getLoan(value: number): string | void {
    if (!this.status) {
      return "This company not get a Loan";
    }

    this.deposit(value);
  }
}

export { JudicialAccount };
