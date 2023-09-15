import React from "react";
import { LetterComponent } from "./LetterComponent";

export const WordComponent = ({ listWord }) => {
  
    return (
    <div className="word">
        {listWord.map((itemLetter) => (
            <LetterComponent 
                key={itemLetter.id} 
                letter={itemLetter.letter} 
                state={itemLetter.status}
            />
        ))}
    </div>
    );
};
