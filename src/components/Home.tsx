import React from "react";
import Table from "./table/Table";
import { useState, useEffect } from "react";

// interface Category {
//   id: string;
//   name: string;
// }

// interface Author {
//   name: string;
//   avatar: string;
// }

// interface Posts {
//   id: string;
//   title: string;
//   publishDate: string;
//   author: Author;
//   summary: string;
//   categories: Category[];
// }

function Home(){
  
  return (
    <div>
      <h1 className="text-blue-900">Home</h1>
      <p>Welcome to the Home page!</p>
      <Table apiKey="/api/posts"/>
    </div>
  );
};

export default Home;