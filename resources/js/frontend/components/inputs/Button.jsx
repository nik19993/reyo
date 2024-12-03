import React from "react";

export default function Button({
    className = "",
    onClick = () => {},
    title = "",
    type = "button",
}) {
    return (
        <button className={className} onClick={onClick} type={type}>
            {title}
        </button>
    );
}
