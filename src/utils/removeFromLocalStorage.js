const removeFromLocalStorage = (image) => {
  let watchlist = localStorage.getItem("watchlist");
  watchlist = JSON.parse(watchlist);

  const index = watchlist.indexOf(image);
  watchlist.splice(index, 1);

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};

export default removeFromLocalStorage;
