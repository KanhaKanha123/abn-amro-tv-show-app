export type BundlesProps = {
    id: number,
    afbeelding: string,
    urlAlias: string,
    labelValue: string,
    title: string,
    lead: string,
    formatted: string
}

export type ArticleProps = {
    artcleData: {
        title: string,
        label: string,
        description: string,
        image: string
    }
};

export type ArticlesListVerticleProps = {
    bundles: BundlesProps[];
};

export type ArticlesListHorizontalProps = {
    bundles: BundlesProps[];
};

export type ArticleHorizontalLayoutProps = {
    bundle: BundlesProps
}

export type ArticleVerticleLayoutProps = {
    bundle: BundlesProps
}


export type Show = {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel: string | null;
    dvdCountry: Country | null;
    externals: Externals;
    image?: Image;
    summary: string;
    updated: number;
    _links: Links;
  };
  
  export type Schedule = {
    time: string;
    days: string[];
  };
  
  export type Rating = {
    average: number;
  };
  
  export type Country = {
    name: string;
    code: string;
    timezone: string;
  };
  
  export type Network = {
    id: number;
    name: string;
    country: Country;
    officialSite: String;
  };
  
  export type Externals = {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  
  export type Image = {
    medium: string;
    original: string;
  };
  
  export type Self = {
    href: string;
  };
  
  export type Links = {
    self?: Self;
    previousepisode?: Self;
    show?: Self;
    character?: Self;
  };
  
  export type ShowSearch = {
    score: number;
    show: Show;
  };
  
