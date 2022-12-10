export const getFavourites = () => {
  const favouritesFromLocalStorage = localStorage.getItem('favouriteSong');
  const favourites: number[] =
    (favouritesFromLocalStorage == null
      ? null
      : JSON.parse(favouritesFromLocalStorage)) ?? [];
  return favourites;
};
