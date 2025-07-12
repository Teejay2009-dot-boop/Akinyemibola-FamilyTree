import Navbar from "../components/NavBar";

import React from "react";
import Lineage from "./Lineage"; // adjust path if needed

const lineageData = {
  father: "Pa Akinlemibola",
  children: [
    {
      name: "Elder Brother",
      children: ["Child 1", "Child 2", "Child 3"],
    },
    {
      name: "Client",
      children: ["Client Child 1", "Client Child 2", "Client Child 3"],
    },
    {
      name: "Younger Brother",
      children: ["Child A"],
    },
  ],
};

function LineagePage() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Lineage data={lineageData} />
      </div>
    </>
  );
}

export default LineagePage;
