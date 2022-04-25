import React from "react";
import "./App.css";
import { Matches } from "./Matches";
import { createApiClient, Match } from "./api";

export type AppState = {
  matches?: Match[];
  search: string;
};

const api = createApiClient();

const App = () => {

  const [search, setSearch] = React.useState<string>("");
  const [matches, setMatches] = React.useState<Match[]>([]);

  React.useEffect(() => {
    async function fetchMatches() {
      setMatches(await api.getMatches());
    }
    fetchMatches();
  }, []);

  let searchDebounce: any;
  const onSearch = (val: string, newPage?: number) => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(async () => {
      setSearch(val);
    }, 300);
  };

  let matchesToShow = matches

  if (search !== '') {
    matchesToShow = matches.filter(t => {
      (
        t.borrower.user.firstName.toLowerCase() +
        t.borrower.user.lastName.toLowerCase()
      ).includes(search.toLowerCase())
        || (t.companyName.toLowerCase()).includes(search.toLowerCase())
    })
  }


  return (
    <main>
      <h1>Matches List</h1>
      <header>
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </header>
      {matches ? (
        <Matches matches={matches} search={search} />
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
};
export default App;
