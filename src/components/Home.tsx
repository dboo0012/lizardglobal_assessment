import React from "react";
import Table from "./table/Table";
import { useState, useEffect } from "react";

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

function Home(){

  const apiKey = "/api/posts";
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetch(apiKey)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch photos');
        }
        return res.json();
      })
      .then((data) => {
        setData(data.posts)
        console.log(data);
      })
      .catch((error) => {
        console.error("Error",error);
      });
    }, []);
  
  return (
    <div>
      <h1 className="text-blue-900">Home</h1>
      <p>Welcome to the Home page!</p>

      <Table data={data}/>
    </div>
  );
};

export default Home;