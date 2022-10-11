import React, { useEffect, useState } from "react";
import Bbbtn from "./Bbbtn";
import { Wrapper } from "./Filter.index";
import Resoult from "./Resoult";
import Items from "../MainSection/BlogItems";
import Item from "../../BlogItems.json";
import { motion, AnimatePresence } from "framer-motion";
const Fliter = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGere, setActiveGere] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);
  // useEffect(() => {
  //     fetch("../MainSection/BlogItems")
  //       .then((movies) => movies.json())
  //       .then((movies) => {
  //         setPopular(movies.resoults);
  //         // console.log(items);
  //         setFiltered(movies.resoults);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       // .finally(() => {
  //       //   setLoading(false);
  //       // });
  //   }, []);
  const fetchPopular = async () => {
    const data = await fetch(
      // "https://api.themoviedb.org/3/movie/popular?api_key=2d7f01bf99f1ea5e439259e376dcf517&language=en-US&page=1"
      `../../BlogItems.json`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then(data => data.json())
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <Wrapper>
      <Bbbtn
        popular={popular}
        setFiltered={setFiltered}
        activeGere={activeGere}
        setActiveGere={setActiveGere}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Resoult key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </Wrapper>
  );
};

export default Fliter;
