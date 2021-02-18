const removeFromLocalStorage = (show) => {
  let watchlist = localStorage.getItem("watchlist");
  watchlist = JSON.parse(watchlist);

  watchlist = watchlist.filter((savedShow) => savedShow.image !== show.image);

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};

export default removeFromLocalStorage;
