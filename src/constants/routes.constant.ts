enum AppRoutes {
  dashboard = '/',
  showDetails = '/show-details',

}
enum ItemCountPerPage{
  itemPerGenre=6
}
enum ApiRoutes {
  apiShows = 'https://api.tvmaze.com/shows',
  apiSearchShows = 'https://api.tvmaze.com/search/shows',
}

export const RoutesConfig = {
  ...AppRoutes,
  ...ApiRoutes,
  ...ItemCountPerPage,
};
