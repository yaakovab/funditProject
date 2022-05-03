import React from "react";
import { Match } from "../api";

export const SingleMatch = ({ match, approved, setApproved, declined, setDeclined, matchesToShow, setMatches, handleApproveButtonClick }
    : {
        match: Match;
        approved: number;
        setApproved: Function;
        declined: number;
        setDeclined: Function;
        matchesToShow: Match[];
        setMatches: Function;
        handleApproveButtonClick: Function
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
                <Button type="button" className="btn btn-light" match={match} handleApproveButtonClick={handleApproveButtonClick} />
                <button type="button" className="btn btn-outline-dark" onClick={() => {
                    setDeclined(declined + 1);
                    setMatches(matchesToShow.filter(m => m.id !== match.id))
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


const Button = ({ className, handleApproveButtonClick, match }:
    { type: string, className: string, handleApproveButtonClick: Function, match: Match }) => {
    return (
        <button className={className} onClick={() => handleApproveButtonClick(match.id)}>
            Approve
        </button>
    )
}