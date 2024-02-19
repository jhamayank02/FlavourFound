import { useEffect, useState } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';

const Table = (props) => {

    const {columns, data, fetchDetails} = props;

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, nextPage, previousPage, canNextPage, canPreviousPage, state:{pageIndex}, pageCount } = useTable({ columns, data }, useSortBy, usePagination);


    return (
        <div>
        <div className='overflow-scroll'>
        <table className='text-justify w-[80%] m-auto border-[1px] border-[#515454]' {...getTableProps()}>

            <thead className='bg-[#515454] text-4xl text-white font-[400]'>
                {headerGroups.map(hg => {
                    return <tr {...hg.getHeaderGroupProps()}>
                        {
                            hg.headers.map(column => {
                                return <th className=' px-3 py-2' {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    {column.isSorted && <span>{column.isSortedDesc ? <i class='bx bx-chevron-down' ></i> : <i class='bx bx-chevron-up'></i>}</span>}
                                </th>
                            })
                        }
                    </tr>
                })}
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    page.map(row=>{
                        prepareRow(row);

                        return (<tr onClick={()=>fetchDetails !== undefined && fetchDetails(row.cells[0].value)} className='text-4xl hover:bg-[#e4e4e4] hover:cursor-pointer' {...row.getRowProps()}>
                            {
                                row.cells.map(cell=>{
                                    return <td className='font-[300] border-r-[1px] border-b-[1px] border-[#515454] px-3 py-2' {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                })
                            }
                        </tr>)
                    })
                }
            </tbody>

        </table>
        </div>  
        <div className='w-[max-content] m-auto my-7'>
            <button className="text-4xl mt-2 mr-2 bg-[#515454] py-4 px-10 text-white border-[1px] border-[#515454] rounded-3xl disabled:bg-[#b2b2b2] disabled:border-[#b2b2b2] disabled:cursor-not-allowed" disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
            <span className='mx-3 text-4xl'>{pageIndex+1} of {pageCount}</span>
            <button className="text-4xl mt-2 mr-2 bg-[#515454] py-4 px-10 text-white border-[1px] border-[#515454] rounded-3xl disabled:bg-[#b2b2b2] disabled:border-[#b2b2b2] disabled:cursor-not-allowed" disabled={!canNextPage} onClick={nextPage}>Next</button>
        </div>
    </div>
    )
}

export default Table;