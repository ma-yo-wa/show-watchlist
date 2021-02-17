import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.div`
  padding: 20px;
`;

const Input = styled.input`
  width: 40%;
  height: 30px;
  vertical-align: middle;
  margin-bottom: 40px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Search = () => {
  const [query, setQuery] = React.useState("");
  const [tvShows, setTvShows] = React.useState([]);
  const dummyImage =
    "https://ipsumimage.appspot.com/210x295?l=No%20Image%20Found";

  React.useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((response) => {
        setTvShows(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [query]);

  return (
    <>
      <InputContainer>
        <Input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for shows"
        />
      </InputContainer>
      <Images>
        {tvShows.map((tvShow) => (
          <Link
            key={tvShow.show.id}
            to={{
              pathname: `/show`,
              state: {
                image: tvShow.show.image
                  ? tvShow.show.image?.medium
                  : dummyImage,
                title: tvShow.show.name,
                type: tvShow.show.type,
                summary: tvShow.show.summary,
              },
            }}
          >
            <Image>
              <img
                src={tvShow.show.image ? tvShow.show.image?.medium : dummyImage}
                alt={tvShow.show.name}
              />
            </Image>
          </Link>
        ))}
      </Images>
    </>
  );
};

export default Search;
