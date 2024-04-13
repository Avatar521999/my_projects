import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [newsList, setNewsList] = useState([]);
  let [offset, setOffset] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          `https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=${offset}`
        );
        let data = await response.json();
        setNewsList(data.results);
        console.log("print", offset);
      } catch (error) {
        console.log("error while Fetching Data:", error);
      }
    }

    fetchData();
  }, [offset, setOffset]);

  const handlePrevious = () => {
    setOffset((prevValue) => (prevValue === 0 ? prevValue : prevValue - 10));
  };

  const handleNext = () => {
    setOffset((prevValue) => prevValue + 10);
  };

  return (
    <div className="App">
      {/* Page heading */}
      <div className="title">
        <h1>Space News</h1>
      </div>

      {/*  pagination */}
      <div className="pag-cont">
        <button onClick={handlePrevious}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>

      {/* Page Content */}
      <div className="newsContainer">
        {newsList.map((item, index) => (
          <div key={index} className="item">
            <h2>{item.title}</h2>
            <div className="news-image">
              <img src={item.image_url} alt={item.title} />
            </div>
            <h4>
              <spam>Date: </spam>
              {item.published_at.split("T")[0]}
            </h4>
            <h4>
              <spam>Time: </spam>
              {item.published_at.split("T")[1]}
            </h4>
            <p>{item.summary}</p>
            <a href={item.url}>{item.url}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
