import { User } from "./user";
import { Program } from "./program";

export class BuildProgram extends Program{
    idBuild: number;

	// @JsonIgnore
	// @OneToOne
    // User buildUser;
    buildUser: User;

    actualWeight: number; 
}