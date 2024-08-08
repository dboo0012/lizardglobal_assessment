import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

interface TableProps {
    data: Array<any>;
}

function Table({ data }: TableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <TableHeader />
                <tbody>
                    {data.map((row: any, index: number) => (
                        <TableRow key={index} row={row} />
                    ))}
                </tbody>
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot> 
                ADD PAGINATION HERE
                */}
            </table>
        </div>
    );
}

export default Table;

