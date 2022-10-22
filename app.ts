// Dio Banking
import { JudicialAccount } from "./classes/JudicialAccount";
import { PeopleAccount } from "./classes/PeopleAccount";
import { SpecialAccount } from "./classes/SpecialAccount";

const peopleAccount = new PeopleAccount(42014475898, 1, "José Guilherme");
const judicialAccount = new JudicialAccount(
  4715525800121,
  1,
  "SmartCode Desenvolvimento de Softwares LTDA"
);
const specialAccount = new SpecialAccount();
specialAccount.deposit(100);

peopleAccount.deposit(1000);

console.log(peopleAccount.getBalance());
console.log(judicialAccount.getBalance());
