import React from "react";
import { Content } from "../Cards/Cards.styles";
import { Image } from "../Cards/Cards.styles";
import { ContentDetails, ContentNameDetails, DivPai, DivPaiDetails, GenderDetails, SpeciesDetails, StatusDetails } from "./CardDetails.styles";

const CardDetails = ({ details }) => {
  const { image } = details;
  return (
    <DivPaiDetails>
      <ContentDetails>
        <Image src={image} />
        <ContentNameDetails>{details.name}</ContentNameDetails>
        <GenderDetails>Gender: {details.gender}</GenderDetails>
        <StatusDetails status={details.status}>Status: {details.status}</StatusDetails>
  
        <SpeciesDetails>Species: {details.species}</SpeciesDetails>
  
      </ContentDetails>
    </DivPaiDetails>
  );
};

export default CardDetails;
