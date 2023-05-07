import React from 'react'
import Link from 'next/link'
import Companies from '../pages/companies/index';

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
        <table className="w-full overflow-x-scroll rounded-md mx-auto overflow-hidden ">
            <thead className='border items-center justify-center border-gray'>
                <tr className="text-black uppercase text-sm leading-normal">
                    <th className="py-3 border-gray px-6 table-cell text-center">
                        #
                    </th>
                    <th className="py-3 sticky px-6 items-center justify-center text-left ">
                        <div className=' inline-flex mr-3'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>
                        </div>
                        <span>Company</span>

                    </th>
                    <th className="py-3 px-6 text-left">Designation</th>
                    <th className="py-3 px-6 text-left">Experience</th>
                    {/* {headings.map((item, index) =>
                    (
                        <th key={index} className="py-3 border border-black px-6 text-left">{item}
                        </th>
                    )
                    )} */}
                </tr>
            </thead>
            <tbody className="text-emphasis border max-w-full border-muted text-sm font-light">
                {data.map(({ company, designation, experience }, index) => (
                    <tr key={index} className="font-medium hover:bg-gray-100 ">
                        
                            <td className="py-3  px-6 text-center  whitespace-nowrap">
                                {index + 1}
                            </td>
                            <td className=" py-3 px-6 text-left">
                                {truncateString(company, 12)}
                            </td>
                            <td className=" py-3 px-6 text-left">
                                {truncateString(designation, 12)}
                            </td>
                            <td className="py-3 px-6 mx-auto text-left">{truncateString(experience, 12)}
                            </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>

    )
};


export default Table;
