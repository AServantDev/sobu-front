import { Food } from "./food";

export class Program {
  kcalPerDay: number;
  protPerDay: number;
  fatPerDay: number;
  carbPerDay: number;

  // @OneToMany
  // List<Food> food;

  

  food: Food[];
}
export default Program;
