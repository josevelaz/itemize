export type TVMazeShowResponse = Array<{
  score: number
  show: {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    status: string
    runtime: number
    averageRuntime: number
    premiered: string
    ended: string
    officialSite: null | string
    schedule: {
      time: string
      days: string[]
    }
    rating: {
      average: number | null
    }
    weight: number
    network: {
      id: number
      name?: string
      country: {
        name: string
        code: string
        timezone: string
      }
      officialSite: null | string
    }
    webChannel: null
    dvdCountry: null
    externals: {
      tvrage: number | null
      thetvdb: number
      imdb: string
    }
    image: {
      medium: string
      original: string
    }
    summary: string
    updated: number
    _links: {
      self: {
        href: string
      }
      previousepisode: {
        href: string
      }
    }
  }
}>
