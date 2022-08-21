export declare global {
  type Meta = {
    count: number;
    pages: number;
    next: number;
    prev: number | null;
  };

  type CommonResponse<T = unknown> = {
    info: Meta;
    results: T;
  };

  interface Origin {
    name: string;
    url: string;
  }

  interface Location {
    name: string;
    url: string;
  }

  interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
  }

  interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: Date;
  }
}
