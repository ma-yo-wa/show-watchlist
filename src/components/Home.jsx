import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Watchlist = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = ({ location }) => {
  const shows = JSON.parse(localStorage.getItem("watchlist"));

  return (
    <>
      {!shows ? (
        <p>You don't have any shows in your watchlist</p>
      ) : (
        <Container>
          {shows.map((show, id) => (
            <Watchlist key={id}>
              <img src={show} alt="" />
            </Watchlist>
          ))}
        </Container>
      )}
    </>
  );
};

export default withRouter(Home);
