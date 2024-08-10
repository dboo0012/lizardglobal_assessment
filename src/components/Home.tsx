import React from "react";
import Table from "./table/Table";
import { useState, useEffect } from "react";

function Home(){
  
  return (
    <div>
      <Table apiKey="/api/posts"/>
    </div>
  );
};

export default Home;