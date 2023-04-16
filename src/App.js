import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { FilterCard } from "./components/FilterCard";
import link from "./stays.json";

function App() {
  const data = JSON.parse(JSON.stringify(link));
  const [search, setSearch] = useState("");
  const [filterActive, setFilterActive] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const toggleFilterCard = () => {
    console.log(filterActive);
    setFilterActive(!filterActive);
  };

  return (
    <div className="wrapper">
      <Header search={search} handleChange={toggleFilterCard} />
      <FilterCard
        isActive={filterActive}
        toggleFilterCard={toggleFilterCard}
      ></FilterCard>
      <div className="card">
        {data &&
          data
            .filter((obj) => {
              const { title } = obj;
              return title.toLowerCase().match(search.toLowerCase());
            })
            .map((element, index) => {
              return <Card key={index} {...element} />;
            })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
