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
    // const mapCategories
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <tr>
            <td>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </td>
            <td>
                <div className="font-bold">{title}</div>
                <div className="text-sm opacity-50">{formatDate(publishDate)}</div>
            </td>
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
                {categories.map((category) => (
                    <span key={category.id} className="badge badge-neutral badge-sm mr-1 mb-1 p-3">
                        {category.name}
                    </span>
                ))}
            </td>
            <th>
                <button className="btn btn-outline btn-ghost btn-xs hover:bg-primary hover:text-slate-800 hover:btn-active">details</button>
            </th>
        </tr>
    );
}

export default TableRow;
