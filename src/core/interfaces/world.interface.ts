export interface World {
  id: string;
  picture: string;
  worldName: string;
  categories: Category[];
}
export interface Category {
  id: number;
  label: string;
  picture: string;
  activities: Activity[];
}
export interface Activity {
  id: number;
  label: string;
  picture: string;
  places: Place[];
}

export interface Place {
  id: number;
  picture: string;
  attractionName: string;
  map: string;
  aboutDescription: string;
  rating: number;
}
