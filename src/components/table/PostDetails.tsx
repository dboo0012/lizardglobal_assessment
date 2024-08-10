import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Post } from './Table';

const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const post = location.state?.post as Post;

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className='flex justify-center items-center m-6'>
            <table className="table-auto w-full">
                <tbody>
                    <tr>
                        <td className="font-bold"></td>
                        <td>
                            <div className="avatar">
                                <div className="w-32 rounded-full">
                                    <img src={post.author.avatar} alt={`${post.author.name}'s avatar`} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold">Title</td>
                        <td>{post.title}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">ID:</td>
                        <td>{post.id}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Author</td>
                        <td>{post.author.name}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Publish Date</td>
                        <td>{post.publishDate}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Summary</td>
                        <td>{post.summary}</td>
                    </tr>
                    <tr>
                        <td className="font-bold">Categories</td>
                        <td>
                            <ul className="flexflex-wrap ">
                                {post.categories.map((category) => (
                                    <li key={category.id} className="badge badge-neutral badge-xs lg:badge-sm mr-1 mb-1 lg:p-3 p-4">
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PostDetails;