import React from "react";
import { Match } from "./api";

export const Matches = ({
  matches,
  search,
}: {
  matches: Match[];
  search: string;
}) => {
  const filteredMatches = matches.filter(t =>
    (t.borrower.user.firstName.toLowerCase() + t.borrower.user.lastName.toLowerCase()).includes(search.toLowerCase()) ||
    (t.companyName.toLowerCase()).includes(search.toLowerCase()) ||
    (t.borrower.user.email.toLowerCase()).includes(search.toLowerCase())

  );

  const cerditStatus = (score: number) => {
    if (score >= 679) {
      return 'A'
    } else if (score < 579) {
      return 'C'
    }
    return 'B'
  }

  return (
    <>
      {matches ? (
        <div className="results">Showing {matches.length} results</div>
      ) : null}
      <ul className="matches">
        {filteredMatches.map((match) => (
          <li key={match.id} className="match">
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
                <p className={match.borrower.creditScore >= 679 ? "scoreA" : (match.borrower.creditScore < 579 ? "scoreC" : "scoreB")}>
                  <b>Credit score: </b> {cerditStatus(match.borrower.creditScore)}
                </p>
              </div>
            </div>
            <div>
              <button>Approve</button>
              <button>Decline</button>
            </div>
            <footer>
              <div className="meta-data">
                Created At {new Date(match.creationTime).toLocaleString()}
              </div>
            </footer>
          </li>
        ))}
      </ul></>
  );
};
