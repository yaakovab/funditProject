import React from "react"


export const Footer = ({ content }: { content: string }) => {
    return (
        <footer className="meta-data">
            {content}
        </footer>
    )
}