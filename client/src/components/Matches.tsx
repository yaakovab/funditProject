import React from "react";
import { Match } from "../api";
import { SingleMatch } from "./SingleMatch";


export const Matches = ({
  matchesToShow,
  setMatches,
  search,
  approved,
  setApproved,
  declined,
  setDeclined,
}: {
  matchesToShow: Match[];
  setMatches: Function;
  search: string;
  approved: number;
  setApproved: Function;
  declined: number;
  setDeclined: Function
}) => {



  const filteredMatches = matchesToShow.filter(t =>
    (t.borrower.user.firstName.toLowerCase() + ' ' + t.borrower.user.lastName.toLowerCase()).includes(search.toLowerCase()) ||
    (t.companyName.toLowerCase()).includes(search.toLowerCase()) ||
    (t.borrower.user.email.toLowerCase()).includes(search.toLowerCase()) ||
    (t.labels ? (t.labels.some(label => label.toLowerCase().includes(search.toLowerCase()))) : false)

  );

  const handleApproveButtonClick = (id: any) => {
    setApproved(approved + 1);
    console.log(approved);
    setMatches(matchesToShow.filter(m => m.id !== id))
  }


  return (
    <>
      {matchesToShow ? (
        <div className="results">Showing {matchesToShow.length} results</div>
      ) : null}
      <ul className="matches">
        {filteredMatches.map(match => (<SingleMatch
          match={match}
          key={match.id}
          approved={approved}
          setApproved={setApproved}
          declined={declined}
          setDeclined={setDeclined}
          matchesToShow={matchesToShow}
          setMatches={setMatches}
          handleApproveButtonClick={handleApproveButtonClick} />
        ))}
      </ul></>
  );
};
