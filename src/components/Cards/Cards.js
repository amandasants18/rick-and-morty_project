import React, { useState } from "react";
import { Container, Content, ContentName, Image, DivPai } from "./Cards.styles";
import { Button } from "../Pagination/Pagination.styles";
import { useNavigate } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { ContentImage } from "../CardDetails/CardDetails.styles";

const Cards = ({ results }) => {
  let display;
  const [favorite, setFavorite] = useState([]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/details", { state: { name: id } });
  };

  const updateFavorite = (itemId) => {
    let updatedFavorite = [...favorite];
    if (!updatedFavorite.includes(itemId)) {
      updatedFavorite = [...favorite, itemId];
    } else {
      updatedFavorite = updatedFavorite.filter(
        (favoriteItem) => itemId !== favoriteItem
      );
    }
    setFavorite(updatedFavorite);
  };

  const addToFavorite = (x) => {
    favorite.push(x);
  };

  const removeToFavorite = (x) => {
    favorite.pop(x);
  };

  if (results) {
    display = results.map((x) => {
      let { name, id } = x;
      return (
        <DivPai>
          <Content>
            <div cursor="pointer">
              {" "}

              <ContentImage ><Image src={x.image}></Image></ContentImage>
              
            </div>

            <ContentName>{name}</ContentName>

            <div onClick={() => updateFavorite(id)}>
              {favorite.includes(id) ? (
                <MdFavorite
                  onClick={() => {
                    removeToFavorite(x);
                  }}
                />
              ) : (
                <MdFavoriteBorder
                  onClick={() => {
                    addToFavorite(x);
                  }}
                />
              )}
            </div>
            <Button onClick={() => handleClick(id)}>Ver mais</Button>
          </Content>
        </DivPai>
      );
    });
  } else {
    display = "No character";
  }

  return <Container>{display}</Container>;
};

export default Cards;
