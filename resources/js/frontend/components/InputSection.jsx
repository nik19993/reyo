import React from "react";
import Button from "./inputs/Button";

export default function InputSection(props) {
    return (
        <div className="w-full flex flex-col items-center mb-8">
            <input
                type="text"
                ref={props?.cityRef}
                className={`w-full md:w-1/2 p-2 border border-gray-300 rounded-md mb-4 ${
                    props.fieldError && "border-red-500"
                }`}
                placeholder="Enter text"
            />
            <div className="w-full md:w-1/2 flex">
                <Button
                    onClick={() => {
                        props.loadDataByApi();
                    }}
                    title={"Load from API"}
                    className="flex-1 p-2 bg-blue-500 text-white rounded-md mr-2"
                />
                <Button
                    onClick={() => {
                        props.loadDataByDB();
                    }}
                    title={"Load from db"}
                    className="flex-1 p-2 bg-green-500 text-white rounded-md ml-2"
                />
            </div>
        </div>
    );
}
