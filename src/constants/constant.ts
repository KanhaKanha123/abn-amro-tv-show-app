const AppRoutes = {
  dashboard: '/',
  showDetails: '/show-details',
}

const ItemCountPerPage = {
  itemPerGenre: 5
}

const ApiEndPoint = {
  apiShows: 'https://api.tvmaze.com/shows'
}

export const RoutesConfig = {
  ...AppRoutes,
  ...ApiEndPoint,
  ...ItemCountPerPage,
};
