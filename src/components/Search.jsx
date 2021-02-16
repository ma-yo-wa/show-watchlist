import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Image = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  vertical-align: middle;
  margin-bottom: 40px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Search = () => {
  const [query, setQuery] = React.useState("");
  const [tvShows, setTvShows] = React.useState([]);
  const dummyImage = "https://ipsumimage.appspot.com/210x295?l=No%20Image%20Found";

  React.useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/search/shows?q=${query}`)
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
        <Input onChange={(e) => setQuery(e.target.value)} />
      </InputContainer>
      <Images>
        {tvShows.map((tvShow) =>
          !tvShow.show.image?.medium ? (
            <Image>
              <img src={dummyImage} alt="" />
            </Image>
          ) : (
            <Link
              to={{
                pathname: `/show`,
                state: {
                  image: tvShow.show.image?.medium,
                  title: tvShow.show.name,
                  type: tvShow.show.type,
                  summary: tvShow.show.summary,
                },
              }}
            >
              <Image>
                <img src={tvShow.show.image?.medium} alt="" />
              </Image>
            </Link>
          )
        )}
      </Images>
    </>
  );
};

export default Search;
