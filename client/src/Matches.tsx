import React from "react";
import { Match } from "./api";




const SingleMatch = ({ match, approved, setApproved, declined, setDeclined, matches, setMatches }
  : {
    match: Match;
    approved: number;
    setApproved: Function;
    declined: number;
    setDeclined: Function;
    matches: Match[];
    setMatches: Function;
  }) => {


  const cerditStatus = (score: number) => {
    if (score >= 679) {
      return 'A'
    } else if (score < 579) {
      return 'C'
    }
    return 'B'
  }

  return (
    <li className="match">
      <h5 className="title">{match.companyName}</h5>
      <div className="matchData">
        <div>
          <p className="userDate">
            <b>Full Name:</b> {match.borrower.user.firstName}{" "}
            {match.borrower.user.lastName}
          </p>
          <p className="userDate">
            <b>Email:</b> {match.borrower.user.email}
          </p>
          <p className="userDate">
            <b>Amount Request: </b> {match.amountReq}
          </p>
          <p className="userDate">
            <b>Balance: </b> {match.borrower.financeData.balance}{" "}
            {match.borrower.financeData.currency}
          </p>
          <p className={cerditStatus(match.borrower.creditScore)}>
            <b>Credit score: </b> {cerditStatus(match.borrower.creditScore)}
          </p>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-light" onClick={() => {
          setApproved(approved + 1);
          console.log(approved);
          setMatches(matches.filter(m => m.id !== match.id))
        }}>
          Approve
        </button>
        <button type="button" onClick={() => {
          setDeclined(declined + 1);
          setMatches(matches.filter(m => m.id !== match.id))
        }}>
          Decline
        </button>
      </div>
      <footer>
        <div className="meta-data">
          Created At {new Date(match.creationTime).toLocaleString()}
        </div>
      </footer>
    </li >)

}


export const Matches = ({
  matches,
  setMatches,
  search,
  approved,
  setApproved,
  declined,
  setDeclined,
}: {
  matches: Match[];
  setMatches: Function;
  search: string;
  approved: number;
  setApproved: Function;
  declined: number;
  setDeclined: Function
}) => {

  // const [approved, setApproved] = React.useState<number>(0)

  const filteredMatches = matches.filter(t =>
    (t.borrower.user.firstName.toLowerCase() + ' ' + t.borrower.user.lastName.toLowerCase()).includes(search.toLowerCase()) ||
    (t.companyName.toLowerCase()).includes(search.toLowerCase()) ||
    (t.borrower.user.email.toLowerCase()).includes(search.toLowerCase())

  );



  return (
    <>
      {matches ? (
        <div className="results">Showing {matches.length} results</div>
      ) : null}
      <ul className="matches">
        {filteredMatches.map(match => (<SingleMatch match={match} key={match.id}
          approved={approved} setApproved={setApproved} declined={declined} setDeclined={setDeclined}
          matches={matches} setMatches={setMatches} />

        ))}
      </ul></>
  );
};
