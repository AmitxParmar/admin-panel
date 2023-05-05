import React from 'react'
import Link from 'next/link'

const Table = (
    { headings, data }: {
        headings: string[];
        data: {
            company: string;
            designation: string;
            experience: string;
        }[]
    }) => {


    function truncateString(str: string, num: number) {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + "...";
    }

    return (
        <div className="w-full rounded-lg overflow-hidden">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left border border-black">#</th>
                        {headings.map((item, index) =>
                        (
                            <th key={index} className="py-3 border border-black px-6 text-left">{item}
                            </th>
                        )
                        )}
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {data.map(({ company, designation, experience }, index) => (
                        <tr key={index} className="border border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                            <td className="py-3 px-6 text-left">{truncateString(company, 12)}</td>
                            <td className="py-3 px-6 text-left">{truncateString(designation, 12)}</td>
                            <td className="py-3 px-6 text-left">{truncateString(experience, 12)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};


export default Table;
