export class GetSpeciesList {
  static readonly type = '[Species] Get list';
}

export class DiscoverSpecies {
  static readonly type = '[Species] Discover';

  constructor(public file: File) {}
}
