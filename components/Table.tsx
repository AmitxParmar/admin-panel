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
        <div className="w-full rounded-lg border border-black overflow-hidden">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left border border-black">#</th>
                        {headings.map((item, index) =>
                        (
                            <th key={index} className="py-3 border border-black px-6 text-left">{item}
                            </th>
                        )
                        )}
                    </tr>
                </thead>
                {data.map(({ company, designation, experience }, index) => (
                    <tbody key={index} className="text-emphasis-600 text-sm font-light">
                        <Link className='static' href={company}>
                            <tr className=" font-medium hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                                <td className="py-3 px-6 text-left">{truncateString(company, 12)}</td>
                                <td className="py-3 px-6 text-left">{truncateString(designation, 12)}</td>
                                <td className="py-3 px-6 text-left">{truncateString(experience, 12)}</td>
                            </tr>
                        </Link>
                    </tbody>
                ))}
            </table>
        </div>
    )
};


export default Table;
