import React, { useEffect, useState } from "react";
import axios from "axios";
import SeekerCard from "../Home/SeekerCard";

export default function SeekerProfile() {
    const [seeker, setSeeker] = useState([]);

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          const seekerData = res.data.results;
          console.log("this is the data", seekerData)
          setSeeker(seekerData);
        })
        .catch(err => {
          console.log("This is an error", err);
        });
    
      }, []);

      return (
          <div>
              {seeker.map(item => {
                  return <SeekerCard key={item.name} item={item} />;
              })}
          </div>
      );
}