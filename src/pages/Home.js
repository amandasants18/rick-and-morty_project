import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let [searchCharacter, setSearchCharacter] = useState("");

  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchCharacter}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <h1 className="title">Rick & Morty</h1>
      <div>
        <Search
          setPageNumber={setPageNumber}
          setSearchCharacter={setSearchCharacter}
        ></Search>
      </div>

      <div>
        <div>
          <Cards results={results}></Cards>
        </div>
      </div>

      <div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        ></Pagination>
      </div>
    </div>
  );
};

export default Home;
