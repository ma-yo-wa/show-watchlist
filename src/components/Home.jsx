import React from "react";
import styled from "styled-components";

const Watchlist = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = () => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));

  return (
    <>
      {(Array.isArray(watchlist) ? watchlist.length : watchlist) ? ( // watchlist can be null when watchlist isn't dirty or an array if it is
        <Container>
          {watchlist.map((show, id) => (
            <Watchlist key={id}>
              <img src={show} alt="" />
            </Watchlist>
          ))}
        </Container>
      ) : (
        <p>You don't have any shows in your watchlist</p>
      )}
    </>
  );
};

export default Home;
