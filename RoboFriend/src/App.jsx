import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
// import { robots } from "./constants/robots";

const App = () => {
  const [searchfield, setSearchfield] = useState("");
  const [robotsData, setRobotsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await response.json();
      setRobotsData(users);
    }

    fetchData();
  }, []);

  function handleSearchfield(event) {
    event.preventDefault();
    setSearchfield(event.target.value);
  }

  const filteredRobot = robotsData.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (robotsData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-indigo-200 to-blue-400 flex justify-center items-center">
        <h1 className="text-6xl font-bold font-mono  text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 to-blue-400 flex flex-col justify-start items-center py-6">
      <h1 className="text-5xl text-center p-6 font-mono font-bold tracking-wide text-indigo-600 drop-shadow-md">
        RoboFriend
      </h1>
      <SearchBox handleSearchfield={handleSearchfield} />
      <Scroll>
        <CardList robots={filteredRobot} />
      </Scroll>
    </div>
  );
};

export default App;
