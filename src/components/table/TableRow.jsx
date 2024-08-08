import React from "react";

interface TableRowProps {
    name: string;
    avatar: React.ReactNode;
}

function TableRow({name, avatar}: TableRowProps) {
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={row.avatar}
                                alt="Avatar"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{row.name}</div>
                        <div className="text-sm opacity-50">{row.country}</div>
                    </div>
                </div>
            </td>
            <td>
                {row.jobTitle}
                <br />
                <span className="badge badge-ghost badge-sm">{row.jobDescription}</span>
            </td>
            <td>{row.favoriteColor}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
}

export default TableRow;
