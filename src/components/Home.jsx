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
  // watchlist is null until it is modified in /show and then becomes an array
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  return (
    <>
      {watchlist.length ? (
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
