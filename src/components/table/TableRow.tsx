import React from "react";
import { useNavigate } from 'react-router-dom';
import { Post } from './Table';

const TableRow: React.FC<{ post: Post }> = ({ post }) => {
    const navigate = useNavigate();

    // const mapCategories
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const handleDetailsClick = (post: Post) => {
        console.log(`Details for post with ID: ${post.id}`);

        navigate(`/details/${post.id}`, { state: { post } });
    }

    return (
        <tr>
            <td>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </td>
            <td className="p-2 block">
                <div className="font-bold lg:text-md text-sm mb-1">{post.title}</div>
                <div className="lg:text-sm text-xs opacity-50">{formatDate(post.publishDate)}</div>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={post.author.avatar}
                                alt="Avatar"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{post.author.name}</div>
                    </div>
                </div>
            </td>
            <td>
                {post.categories.map((category) => (
                    <span key={category.id} className="badge badge-neutral badge-xs lg:badge-sm mr-1 mb-1 lg:p-3 p-4">
                        {category.name}
                    </span>
                ))}
            </td>
            <th>
                <button className="btn btn-outline btn-ghost btn-xs hover:bg-primary hover:text-slate-800 hover:btn-active" 
                    onClick={()=>handleDetailsClick(post)}>details
                </button>
            </th>
        </tr>
    );
}

export default TableRow;
