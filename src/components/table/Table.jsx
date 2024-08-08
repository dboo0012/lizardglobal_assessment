import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table({ data }) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <TableHeader />
                <tbody>
                    {data.map((row, index) => (
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
