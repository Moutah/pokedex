export interface SpeciesAbstract {
  id: number;
  name: string;
  image: string;
  genre: string;
  description: string;
  weight: number;
  height: number;
  types: string[];
}

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
  speciesList: SpeciesAbstract[];
  species: {
    [id: number]: Species;
  };
  status: 'idle' | 'loading' | 'failed';
}
