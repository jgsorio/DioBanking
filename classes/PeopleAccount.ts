import { Account } from "./Account";

class PeopleAccount extends Account {
  private document: number;

  constructor(document: number, accountNumber: number, name: string) {
    super(accountNumber, name);
    this.document = document;
  }
}

export { PeopleAccount };
