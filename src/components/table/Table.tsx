import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

interface Category {
    id: string;
    name: string;
}

interface Author {
    name: string;
    avatar: string;
}

interface Post {
    id: string;
    title: string;
    publishDate: string;
    author: Author;
    summary: string;
    categories: Category[];
}

interface TableProps {
    data: Post[];
}

function Table({ data }: TableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <TableHeader />
                <tbody>
                    {data.map((row) => (
                        <TableRow 
                            key={row.id}
                            title={row.title}
                            publishDate={row.publishDate}
                            author={row.author}
                            summary={row.summary}
                            categories={row.categories}
                        />
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

