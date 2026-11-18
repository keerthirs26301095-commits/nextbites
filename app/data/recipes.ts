
export type Recipe = {
  id: number;
  title: string;
  minutes: number;
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Margherita Pizza",
    minutes: 30,
    cuisine: "Italian",
  },
  {
    id: 2,
    title: "Chicken Biryani",
    minutes: 45,
    cuisine: "Indian",
  },
  {
    id: 3,
    title: "Veggie Burger",
    minutes: 25,
    cuisine: "American",
  },
  {
    id: 4,
    title: "Chocolate Pancakes",
    minutes: 20,
    cuisine: "French",
  },
];
