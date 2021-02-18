import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import addToLocalStorage from "../utils/addToLocalStorage";
import removeFromLocalStorage from "../utils/removeFromLocalStorage";

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
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
      JSON.parse(localStorage.getItem("watchlist"))
        .map((savedShow) => savedShow.image)
        .includes(show.image)
        ? setiSShowOnWatchlist(true)
        : setiSShowOnWatchlist(false);
    }
  }, [show]);

  const addToWatchlist = (show) => {
    addToLocalStorage(show);
    setiSShowOnWatchlist(true);
  };

  const removeFromWatchList = (image) => {
    removeFromLocalStorage(image);
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
        <Button onClick={() => removeFromWatchList(show)}>
          Remove from Watchlist
        </Button>
      ) : (
        <Button onClick={() => addToWatchlist(show)}>Add To Watchlist</Button>
      )}
    </>
  );
};

export default withRouter(Show);
