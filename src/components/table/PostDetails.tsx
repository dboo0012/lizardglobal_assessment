import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Post } from './Table';

const PostDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const post = location.state?.post as Post;
    
    return (
        <div>
            <h1>Post Details for ID: {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            {/* Render other post details here */}
        </div>
    );
};

export default PostDetails;