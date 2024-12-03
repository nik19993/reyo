import React from "react";
import Button from "./inputs/Button";

export default function ContentBlockApi({ parseListApi, saveData }) {
    const data = parseListApi();
    console.log(data);
    return (
        <div className="w-full max-w-2xl mb-8 p-4 bg-white shadow rounded-md">
            <h1 className="text-xl font-bold mb-2">{data?.city}</h1>
            <h2 className="text-lg font-semibold mb-2">Period</h2>
            <p className="mb-4">{data.start}</p>
            <p className="mb-4">{data.end}</p>
            <Button
                onClick={saveData}
                className="p-2 bg-indigo-500 text-white rounded-md"
                title="Save"
            />
        </div>
    );
}
