import React from "react";
import Button from "./inputs/Button";

export default function ContentBlockDB({ parseListDB }) {
    const data = parseListDB();
    return (
        <div className="w-full max-w-2xl mb-8 p-4 bg-white shadow rounded-md">
            <h1 className="text-xl font-bold mb-2">{data.city}</h1>
            <h2 className="text-lg font-semibold mb-2">{data.date}</h2>
        </div>
    );
}
