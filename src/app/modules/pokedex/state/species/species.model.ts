export interface Species {
  id: number;
  name: string;
  image: string;
  genre: string;
  description: string;
  weight: number;
  height: number;
  types: string[];
}

export interface SpeciesStateModel {
  species: Species[];
  status: 'idle' | 'loading' | 'failed';
}
