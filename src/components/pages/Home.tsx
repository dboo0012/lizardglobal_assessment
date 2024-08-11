import React from "react";
import Table from "../table/Table";
import { useState, useEffect } from "react";
import Navbar from "../ui/Navbar";

function Home(){
  
  return (
    <div>
      <Navbar />
      <Table apiKey="/api/posts"/>
    </div>
  );
};

export default Home;