import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from '../ui/Pagination';
import { useEffect, useState } from 'react';
import SearchFilter from '../ui/SearchFilter';

interface Category {
    id: string;
    name: string;
}

interface Author {
    name: string;
    avatar: string;
}

export interface Post {
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

/**
 * Pagination and category filter logic is implemented in this component. 
 * This is done so that the api call is reduced to once, reducing the potential load on servers and 
 * less repeated code for consistency. Data from the api call is processed and displayed in the table.
 * 
 * The logic behind rendering the table is based on category. Initially, all data is loaded as there is
 * no selected categories. When a category is selected, the data is filtered by trigerring a re render
 * of the table with the filtered data.
 * 
 * Asynchronous data fetching is done using the useEffect hook. The data is fetched from the api and
 * stored in the state. The state is then used to render the table.
 */
function Table({ apiKey }: TableProps) {
    
    const headerTitles = ['Select', 'Title', 'Author', 'Categories', ''];

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Post[]>([]);
    const [filteredData, setFilteredData] = useState<Post[]>([]);

    // Fetching data from the API
    useEffect (() => {
    const fetchPosts = async () => {
        setLoading (true);
        
        try {
            const response = await fetch(apiKey);
            const res = await response.json();
            setData (res.posts);
            setFilteredData(res.posts)
            setLoading (false);
        } catch (error) {
            console.log(error);
        }
    };
    fetchPosts();
    }, []);

    // Pagination Logic
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    // Handle the change of page according to the page number
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    // Calculate the post index to be displayed on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
    //------------------------------------------------------------------------------------

    // Category Logic
    // Handle Category Filter Change
    const handleCategoryChange = (categoryName: string) => {
        if (categoryName === '') {
            setFilteredData(data); // Show all posts if no category is selected
        } else {
            const filtered = data.filter(post =>
                post.categories.some(category => category.name === categoryName)
            );
            setFilteredData(filtered);
        }
        setCurrentPage(1); // Reset to the first page after filtering
    };

    // Get unique categories for the filter dropdown choices
    const uniqueCategories = Array.from(
        new Set(data.flatMap(post => post.categories.map(category => category.name)))
    ).map(name => {
        const category = data.find(post =>
            post.categories.some(category => category.name === name)
        )?.categories.find(category => category.name === name);
        return category!;
    });
    //------------------------------------------------------------------------------------

    return (
        <div className="w-full px-2 lg:px-4">
            <div className='justify-start mt-2 mb-1'>
                <SearchFilter 
                    categories={uniqueCategories} 
                    onFilterChange={handleCategoryChange}
                />
            </div>
            <div className="overflow-x-auto">
            <div className="md:flex md:justify-center md:item-center lg:p-4">
                <table className="lg:table-lg md:table-md sm:table-sm table-zebra">
                    <TableHeader headers={headerTitles}/>
                    <div>
                        {loading && <span className="loading loading-dots p-6 lg:p-8 m-10"></span>}
                    </div>
                    <tbody>
                        {currentPosts.map((row) => ( // Destructuring JSON object to get the data
                            <TableRow
                                post={row}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            <div className='flex justify-center items-center'>
                <Pagination 
                    totalPosts={filteredData.length} 
                    postsPerPage={postsPerPage} 
                    onPageChange={handlePageChange}
                    currentPage={currentPage}/>
            </div>
        </div>
    );
}

export default Table;

