import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
            <Link
              key={id}
              to={{
                pathname: `/show`,
                state: {
                  image: show.image,
                  title: show.title,
                  type: show.type,
                  summary: show.summary,
                },
              }}
            >
              <Watchlist key={id}>
                <img src={show.image} alt={show.name} />
              </Watchlist>
            </Link>
          ))}
        </Container>
      ) : (
        <p>You don't have any shows in your watchlist</p>
      )}
    </>
  );
};

export default Home;
