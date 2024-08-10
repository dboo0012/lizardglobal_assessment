import React from 'react';

interface DetailProps {
    id: string;
}

const Detail = ({ id }: DetailProps) => {
    const handleRowClick = () => {
        // Redirect to the details page with the ID as a parameter
        // history.push(`/details/${id}`);
    };

    return (
        <div>
            <h2>Row Details</h2>
            <p>ID: {id}</p>
            <button onClick={handleRowClick}>View Details</button>
        </div>
    );
};

export default Detail;