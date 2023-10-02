export default interface Recipe {
  id?: string;
  name: string;
  servings: number;
  prepTime: string;
  cookTime: string;
  ingredients: {
    name: string;
    amount: string;
  }[];
  instructions: string[];
}