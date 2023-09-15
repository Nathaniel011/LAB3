import React from "react";

export const ItemKeyComponent = ({ mykey, state, handlerClick}) => {
    return (
        <div
            key={mykey}
            className={state ? "disablediv" : ""}
            onClick={() => {
                handlerClick(mykey);
            }}
        >
            { mykey }
        </div>
    );
};