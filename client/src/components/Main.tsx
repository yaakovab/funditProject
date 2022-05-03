import React from "react"
import { Match } from "../api"
import { Input } from "./Input"
import { Matches } from "./Matches"


export const Main = ({
    type,
    placeHolder,
    onSearch,
    matches,
    matchesToShow,
    search,
    approved,
    setApproved,
    setMatches,
    declined,
    setDeclined
}:
    {
        type: string,
        placeHolder: string,
        onSearch: Function,
        matches: Match[],
        matchesToShow: Match[],
        search: string,
        approved: number,
        setApproved: Function,
        setMatches: Function,
        declined: number,
        setDeclined: Function
    }) => {

    return (
        <main>
            <Input type={type} placeHolder={placeHolder} onSearch={onSearch} />
            {
                matches ? (
                    <Matches matchesToShow={matchesToShow}
                        search={search}
                        approved={approved}
                        setApproved={setApproved}
                        declined={declined}
                        setDeclined={setDeclined}
                        setMatches={setMatches} />
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </main>
    )
}

