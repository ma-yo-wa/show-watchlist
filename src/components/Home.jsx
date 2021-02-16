import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Home = ({ location }) => {
  const shows = JSON.parse(localStorage.getItem("shows"));

  return (
    <>
      {!shows ? (
        <p>You don't have any shows in your watchlist</p>
      ) : (
        <div>
          <Container>
            {shows.map((show) => (
              <img src={show} alt="" />
            ))}
          </Container>
        </div>
      )}
    </>
  );
};

export default withRouter(Home);
