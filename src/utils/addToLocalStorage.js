const addToLocalStorage = (show) => {
  let watchlist = localStorage.getItem("watchlist");
  watchlist = watchlist ? JSON.parse(localStorage.getItem("watchlist")) : [];
  watchlist.push(show);

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};

export default addToLocalStorage;
