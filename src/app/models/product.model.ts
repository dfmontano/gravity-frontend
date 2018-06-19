import { Category } from './category.model';
import { Subcategory } from './subcategory.model';

export class Product {
  name: string;
  description: string;
  category: Category;
  subcategory: Subcategory;
  sku: string;
  stock: number;
  price: number;
  discount: number;
  visits: number;
  rating: number;
  images: string[];
}
