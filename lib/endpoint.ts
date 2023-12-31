// movie enpoint
export const TRENDING = '/trending/movie/day?language=en-US'
export const NOW_PLAYING = '/movie/now_playing?language=en-US&page=1'
export const POPULAR = '/movie/popular?language=en-US&page=1'
export const TOP_RATE = '/movie/top_rated?language=en-US&page=1'
export const UP_COMING = '/movie/upcoming?language=en-US&page=2'

//tv enpoint
export const TRENDING_TV = '/trending/tv/day?language=en-US'
export const AIRING_TODAY = '/tv/airing_today?language=en-US&page=1'
export const ON_THE_AIR = '/tv/on_the_air?language=en-US&page=1'
export const POPULAR_TV = '/tv/popular?language=en-US&page=1'
export const TOP_RATE_TV = '/tv/top_rated?language=en-US&page=1'

//movie defailt similar
export const SIMILAR_MOVIES = (id: string): string =>
  `/movie/${id}/similar?language=en-US&page=1`
export const RECOMMENDATIONS = (id: string): string =>
  `/movie/${id}/recommendations?language=es-US&page=1`
