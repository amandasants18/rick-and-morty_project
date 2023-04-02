import React from "react";
import { Container, Content, ContentName, Image, DivPai } from "./Cards.styles";
import { Button } from "../Pagination/Pagination.styles";
import {  useNavigate } from "react-router-dom";


const Cards = ({ results }) => {
  let display;

const navigate = useNavigate()

const handleClick = (id) =>{
navigate('/details', {state: {name: id}})

}

  if (results) {
    display = results.map((x) => {
      let { location, gender, name, imagem, id } = x;
      return (
        <DivPai>
          <Content>
            <div cursor="pointer">
              {" "}
              <Image src={x.image}></Image>
            </div>

            <ContentName>{name}</ContentName>
           
             <Button onClick={()=> handleClick(id)}>Ver mais</Button>
            
            
          </Content>
        </DivPai>
      );
    });
  } else {
    display = "no caracter";
  }


  return <Container>{display}</Container>;

};



export default Cards;
