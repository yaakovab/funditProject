import React from "react";
import { Match } from "../api";
import { Button } from "./Button";
import { Footer } from "./Footer";

export const SingleMatch = ({
    match,
    handleApproveButtonClick,
    handleDeclineButtonClick }
    : {
        match: Match;
        approved: number;
        setApproved: Function;
        declined: number;
        setDeclined: Function;
        matchesToShow: Match[];
        setMatches: Function;
        handleApproveButtonClick: Function;
        handleDeclineButtonClick: Function;
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
            <h5 className="title">
                {match.companyName}
            </h5>
            <div className="matchData">
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
            <div>
                <Button text="Approve" type="button" className="btn btn-light" match={match} handleButtonClick={handleApproveButtonClick} />
                <Button text="Decline" type="button" className="btn btn-outline-dark" match={match} handleButtonClick={handleDeclineButtonClick} />
            </div>
            <Footer content={`Created At ${new Date(match.creationTime).toLocaleString()}`} />
        </li >)

}


