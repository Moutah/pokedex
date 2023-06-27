export class GetSpeciesList {
  static readonly type = '[Species] Get list';

  constructor(public search?: string) {}
}

export class DiscoverSpecies {
  static readonly type = '[Species] Discover';

  constructor(public file: File) {}
}

export class GetSpecies {
  static readonly type = '[Species] Get single';

  constructor(public id: number) {}
}
