import React from 'react';

function TableHeader() {
    return (
        <thead>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
        </thead>
    );
}

export default TableHeader;
