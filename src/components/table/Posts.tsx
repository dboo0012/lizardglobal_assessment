import React from 'react';
    interface PostProps{
        posts: [],
        loading: boolean;
    }
    const Post = ({ posts, loading }: PostProps) => {
        if (loading) {
            return <h1>Loading...</h1>;
        }

        return (
            <>
                {posts.map((data, index) => (
                <div className='list' key={index}>
                    <p>{data}</p>
                </div>
            ))}
        </>
        );
    };

    export default Post;