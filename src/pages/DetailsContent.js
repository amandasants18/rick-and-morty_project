import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardDetails from "../components/CardDetails/CardDetails";

export const DetailsContent = () => {
  const [details, setDetails] = useState({});

  const location = useLocation();

  const id = location.state.name;

  useEffect(() => {
    const data = async () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => setDetails(res.data))
        .catch((err) => console.log(err));
    };
    data();
  }, []);

  useEffect(() => {}, [details]);

  return <CardDetails details={details} />;
};
