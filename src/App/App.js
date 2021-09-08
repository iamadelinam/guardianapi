import "./App.css";
import Guardian from "../Guardian/Guardian";
import React, { useEffect } from "react";
import { useState } from "react";

const getArticles = (query) => {
  return fetch(
    `https://content.guardianapis.com/search?q=${query}&api-key=8d2e0237-b147-4f46-adcb-a82818304d17`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.response.results;
    });
};

function App() {
  const [articles, setArticles] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  const showArticles = () => {
    getArticles(value).then((data) => {
      setArticles(data);
    });
  };
  const handleQueryCHange = (e) => {
    setValue(e.target.value);
  };

  console.log(articles);
  return (
    <>
      <Guardian
        onClick={showArticles}
        articles={articles}
        changeQuery={handleQueryCHange}
        query={value}
      />
    </>
  );
}

export default App;
