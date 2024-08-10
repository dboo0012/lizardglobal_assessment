import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from '../ui/Pagination';
import { useEffect, useState } from 'react';

interface Category {
    id: string;
    name: string;
}

interface Author {
    name: string;
    avatar: string;
}

interface Posts {
    id: string;
    title: string;
    publishDate: string;
    author: Author;
    summary: string;
    categories: Category[];
}

interface TableProps {
    apiKey: string;
}

function Table({ apiKey }: TableProps) {
    
    const headerTitles = ['Select', 'Title', 'Author', 'Categories', ''];

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Posts[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    // Fetching data from the API
    useEffect (() => {
    const fetchPosts = async () => {
        setLoading (true);
        
        try {
            const response = await fetch(apiKey);
            const data = await response.json();
            setData (data.posts);
            setLoading (false);
        } catch (error) {
            console.log(error);
        }
    };
    fetchPosts();
    }, []);

    // Handle the change of page according to the page number
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    // Calculate the posts to be displayed on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <TableHeader headers={headerTitles}/>
                <div className="flex item-center justify-center ">
                    {loading && <span className="loading loading-dots p-6 lg:p-8 m-10"></span>}
                </div>
                <tbody>
                    {currentPosts.map((row) => ( // Destructuring JSON object to get the data
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
            </table>
            <div className='flex justify-center items-center'>
                <Pagination 
                    totalPosts={data.length} 
                    postsPerPage={postsPerPage} 
                    onPageChange={handlePageChange}
                    currentPage={currentPage}/>
            </div>
        </div>
    );
}

export default Table;

