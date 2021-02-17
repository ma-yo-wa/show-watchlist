const addToLocalStorage = (image) => {
  let watchlist = localStorage.getItem("watchlist");
  watchlist = watchlist ? JSON.parse(localStorage.getItem("watchlist")) : [];
  watchlist.push(image);

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};

export default addToLocalStorage;
