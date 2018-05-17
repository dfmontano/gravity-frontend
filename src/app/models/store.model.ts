import { Category } from './category.model';

export class Store {

  id: number;
  nombre: string;
  descripcion: string;
  slogan: string;
  fijo: number;
  celula: number;
  propietario: string;
  ruc: number;
  calle_principal: string;
  calle_secundaria: string;
  sector: string;
  latitud: number;
  longitud: number;
  referencia: string;
  webpage_link: string;
  facebook_link: string;
  twitter_link: string;
  instagram_link: string;
  commission: number;
  created_at: number;
  updated_at: string;
  approved: boolean;
  category: Category;

}
