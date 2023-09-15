import React from "react";

export const LetterComponent = ({ letter , state}) => {
    return <div className="box">
        {state ? letter :"_"}
    </div>;
};