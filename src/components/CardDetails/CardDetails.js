import React from "react";
import { ContentImage } from "./CardDetails.styles";
import { Image } from "../Cards/Cards.styles";
import { ContentDetails, ContentNameDetails, DivDetails, GenderDetails, SpeciesDetails, StatusDetails } from "./CardDetails.styles";

const CardDetails = ({ details }) => {
  const { image } = details;
  return (
    <DivDetails>
      <ContentDetails>
        <ContentImage> <Image src={image} /></ContentImage>
       
        <ContentNameDetails>{details.name}</ContentNameDetails>
        <GenderDetails>Gender: {details.gender}</GenderDetails>
        <StatusDetails status={details.status}>Status: {details.status}</StatusDetails>
  
        <SpeciesDetails>Species: {details.species}</SpeciesDetails>
  
      </ContentDetails>
    </DivDetails>
  );
};

export default CardDetails;
