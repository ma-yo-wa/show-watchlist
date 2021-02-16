import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
  const [isShowAdded, setIsShowAdded] = React.useState(false);

  console.log(show.image, "here");

  const addToWatchlist = () => {
    let shows = localStorage.getItem("shows");
    shows = !!shows ? JSON.parse(localStorage.getItem("shows")) : [];
    shows.push(show.image);

    localStorage.setItem("shows", JSON.stringify(shows));

    setIsShowAdded(true);
  };

  const removeFromWatchList = () => {
    let watchlist = localStorage.getItem("show");
    watchlist = JSON.parse(watchlist);
    localStorage.setItem("shows", JSON.stringify(watchlist.pop));
    setIsShowAdded(false);
  };

  return (
    <>
      <Container>
        <Image src={show.image} alt="" />
        <div>
          <p style={{marginTop: 0}}>{show.title}</p>
          <b>{show.type}</b>
          <Summary dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      </Container>
      {isShowAdded ? (
        <Button onClick={removeFromWatchList}>Remove from the list</Button>
      ) : (
        <Button onClick={addToWatchlist}>Add To Watchlist</Button>
      )}
    </>
  );
};

export default withRouter(Show);
