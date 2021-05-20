export interface ItemOption {
  id: number;
  code: string;
  name: string;
  active: boolean;
  price: number;
  description?: string;
  nutritionFacts?: NutritionFacts;
}

export interface NutritionFacts {
  id: number;
  servings?: number;
  calories?: number;
  fat_calories?: number;
  total_fat?: number;
  saturated_fat?: number;
  trans_fat?: number;
  cholesterol?: number;
  sodium?: number;
  potassium?: number;
  total_carb?: number;
  dietary_fiber?: number;
  sugars?: number;
  sugar_alcohols?: number;
  protein?: number;
  vitaminA?: number;
  vitaminB6?: number;
  vitaminB12?: number;
  vitaminC?: number;
  vitaminE?: number;
  vitaminK?: number;
  folate?: number;
  magnesium?: number;
  thiamin?: number;
  zinc?: number;
  calcium?: number;
  riboflavin?: number;
  biotin?: number;
  iron?: number;
  niacin?: number;
  pantothenic_acid?: number;
  phosphorus?: number;
  serving_size?: string;
}
