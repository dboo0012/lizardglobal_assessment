import React from "react";

interface Category {
    id: string;
    name: string;
}

interface Author {
    name: string;
    avatar: string;
}

interface TableRowProps {
    title: string;
    publishDate: string;
    author: Author;
    summary: string;
    categories: Category[];
}

const TableRow =({ title, publishDate, author, summary, categories }: TableRowProps) =>{
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
                                src={author.avatar}
                                alt="Avatar"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{author.name}</div>
                        {/* <div className="text-sm opacity-50">{row.country}</div> */}
                    </div>
                </div>
            </td>
            <td>
                {/* {row.jobTitle} */}
                <br />
                {categories.map((category) => (
                    <span key={category.id} className="badge badge-ghost badge-sm">
                        {category.name}
                    </span>
                ))}
            </td>
            {/* <td>{row.favoriteColor}</td> */}
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
}

export default TableRow;
