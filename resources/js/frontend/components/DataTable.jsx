import React from "react";

export default function DataTable({ list = [] }) {
    return (
        <div className="w-full max-w-4xl p-4 bg-white shadow rounded-md">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Datetime
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Min temp
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Max temp
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Wind speed
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {list.map((item, index) => {
                        return (
                            <tr key={`row-${index}`}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.timestamp_dt}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {`${item.min_tmp}°C`}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {`${item.max_tmp}°C`}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {`${item.wind_spd} km/h`}
                                </td>
                            </tr>
                        );
                    })}

                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}
