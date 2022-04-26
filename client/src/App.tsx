import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Matches } from "./Matches";
import { createApiClient, Match } from "./api";


export type AppState = {
  matchesToShow?: Match[];
  setMatches: Function;
  search: string;
  approved: string;
  setApproved: Function;
  declined: number;
  setDeclined: Function;
};

const api = createApiClient();

const App = () => {

  const [search, setSearch] = React.useState<string>("");
  const [matches, setMatches] = React.useState<Match[]>([]);
  const [approved, setApproved] = React.useState<number>(0)
  const [declined, setDeclined] = React.useState<number>(0)

  React.useEffect(() => {
    async function fetchMatches() {
      setMatches(await api.getMatches());
    }
    fetchMatches();
  }, []);

  let searchDebounce: any;
  const onSearch = (val: string) => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(async () => {
      setSearch(val);
    }, 300);
  };

  let matchesToShow = matches

  if (search !== '') {
    matchesToShow = matches.filter(t => (t.borrower.user.firstName.toLowerCase() + ' ' + t.borrower.user.lastName.toLowerCase()).includes(search.toLowerCase()) ||
      (t.companyName.toLowerCase()).includes(search.toLowerCase()) ||
      (t.borrower.user.email.toLowerCase()).includes(search.toLowerCase()) ||
      (t.labels ? (t.labels.some(label => label.toLowerCase().includes(search.toLowerCase()))) : false))
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
        <Matches matchesToShow={matchesToShow} search={search} approved={approved} setApproved={setApproved}
          declined={declined} setDeclined={setDeclined}
          setMatches={setMatches} />
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
};
export default App;
