import React from "react"

export const Input = ({ type, placeHolder, onSearch }:
    { type: string, placeHolder: string, onSearch: Function }) => {

    return (
        <input
            type={type}
            placeholder={placeHolder}
            onChange={(e) => onSearch(e.target.value)} />
    )
}