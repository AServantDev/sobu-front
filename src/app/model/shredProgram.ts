import { Program } from "./program";
import { User } from "./user";

export class ShredProgram extends Program {
  idShred: number;

  // @JsonIgnore
  // @OneToOne
  // User shredUser;
  shredUser: User;

  actualWeight: number;
}
