import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import PropTypes from "prop-types";
import SearchList from "../components/SearchList";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setIsOpen(true);
    if (searchValue !== "") {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
        .then((res) => {
          console.log(res.data);
          setSearchResults(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [searchValue]);
  const handleChange = (e) => {
    e.preventDefault();

    setSearchValue(e.target.value);
  };
  useEffect(() => {
    if (searchValue === "") {
      setIsOpen(false);
      setSearchResults([]);
    }
  }, [searchValue]);


  return (
    <div>
      <SearchBar handleChange={handleChange} />
      {isOpen && (
        <ul className="bg-[#B6B6B6]  rounded-b-lg px-2 py-2  flex gap-2 flex-col  ">
          {searchResults.map((data, idx) => (
            <SearchList key={idx} data={data} id={idx} />
          ))}
        </ul>
      )}
      <div>
        <h4 className="text-xl mt-5">Recents</h4>
        <ul>
          <li>Goat</li>
          <li>Segun</li>
          <li>Dog</li>
          <li>laptop</li>
        </ul>
      </div>
    </div>
  );
}
// App.PropTypes={

// }
export default Home;
