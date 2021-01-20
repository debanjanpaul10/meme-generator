import React from "react"
import headerImage from "../Images/Trollface.png"

export default function Header() {
    return (
        <header>
            <img 
                src={headerImage} 
                alt="Problem?" 
            />
            <p>Meme Generator</p>
        </header>
    )
}