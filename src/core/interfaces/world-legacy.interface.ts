export interface WorldLegacy {
  category: string;
  icon_category: string;
  id_category: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  subcategory: string;
  icon_subcategory: string;
  id_subcategory: string;
  categories: Category[];
}

export interface Category {
  subcategoryFinal: string;
  icon_subcategoryFinal: string;
  id_subcategoryFinal: string;
  categoriesFinal: CategoriesFinal[];
}

export interface CategoriesFinal {
  id: string;
  name: string;
  image: string;
  desc: string;
}
