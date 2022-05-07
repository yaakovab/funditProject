import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Header } from "./components/Header";
import { createApiClient, Match } from "./api";
import { Main } from "./components/Main";


export type AppState = {
  matches: Match[];
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
    <>
      <Header header='Matches List' />
      <Main type="search"
        placeHolder="Search..."
        onSearch={onSearch}
        matches={matches}
        matchesToShow={matchesToShow}
        search={search}
        approved={approved}
        setApproved={setApproved}
        setMatches={setMatches}
        declined={declined}
        setDeclined={setDeclined} />
    </>
  );
};




export default App;
