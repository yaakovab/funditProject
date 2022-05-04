import React from "react"
import { Match } from "../api"

export const Button = ({ className,
    handleButtonClick,
    match,
    text }:
    {
        type: string,
        className: string,
        handleButtonClick: Function,
        match: Match,
        text: string
    }) => {
    return (
        <button className={className} onClick={() => handleButtonClick(match.id)}>
            {text}
        </button>
    )
}