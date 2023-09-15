import React from "react";

export const DrawComponent = ({counter}) => {
    return (
        <div>
            <img src={`/assets/img${counter}.png`} alt="test" />
        </div>
    );
};
    