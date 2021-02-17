import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Summary = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 0.5em 0.7em;
  font-weight: 300;
  margin-top: 25px;
`;

const Image = styled.img`
  margin-right: 20px;
`;

const Show = ({ location }) => {
  const show = location.state;
  const [isShowOnWatchlist, setiSShowOnWatchlist] = React.useState(false);

  React.useEffect(() => {
    const watchlist = localStorage.getItem("watchlist");

    if (!watchlist) {
      setiSShowOnWatchlist(false);
    } else {
      JSON.parse(localStorage.getItem("watchlist")).includes(show.image)
        ? setiSShowOnWatchlist(true)
        : setiSShowOnWatchlist(false);
    }
  }, [show]);

  const addToWatchlist = () => {
    let watchlist = localStorage.getItem("watchlist");
    watchlist = watchlist ? JSON.parse(localStorage.getItem("watchlist")) : [];
    watchlist.push(show.image);

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    setiSShowOnWatchlist(true);
  };

  const removeFromWatchList = () => {
    let watchlist = localStorage.getItem("watchlist");
    watchlist = JSON.parse(watchlist);

    const index = watchlist.indexOf(show.image);
    watchlist.splice(index, 1);

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    setiSShowOnWatchlist(false);
  };

  return (
    <>
      <Container>
        <Image src={show.image} alt="" />
        <div>
          <p style={{ marginTop: 0 }}>{show.title}</p>
          <b>{show.type}</b>
          <Summary dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      </Container>
      {isShowOnWatchlist ? (
        <Button onClick={removeFromWatchList}>Remove from the list</Button>
      ) : (
        <Button onClick={addToWatchlist}>Add To Watchlist</Button>
      )}
    </>
  );
};

export default withRouter(Show);
