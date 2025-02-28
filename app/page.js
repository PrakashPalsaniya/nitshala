"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import DownloadCard from "./components/DownloadCard";

export default function Home() {
  // Papers Data
  const papers = [
    { title: "Data Structures", branch: "CS", sem: "3", filename: "data_structures.pdf", size: "3.2 MB", downloadLink: "/files/data_structures.pdf" },
    { title: "DBMS", branch: "IT", sem: "4", filename: "dbms.pdf", size: "2.8 MB", downloadLink: "/files/dbms.pdf" },
    { title: "Operating Systems", branch: "CS", sem: "5", filename: "os.pdf", size: "4.1 MB", downloadLink: "/files/os.pdf" },
    { title: "Digital Electronics", branch: "ECE", sem: "3", filename: "digital_electronics.pdf", size: "3.5 MB", downloadLink: "/files/digital_electronics.pdf" },
    { title: "Software Engineering", branch: "IT", sem: "6", filename: "software_engineering.pdf", size: "2.9 MB", downloadLink: "/files/software_engineering.pdf" },
    { title: "Computer Networks", branch: "CS", sem: "5", filename: "computer_networks.pdf", size: "3.7 MB", downloadLink: "https://drive.google.com/uc?export=download&id=1WgIowldxF95WEH2pD3SPMW2TIEfWjlP7"
 },
  ];

  // State for filters
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSem, setSelectedSem] = useState("");

  // Get unique branches and semesters for dropdowns
  const branches = [...new Set(papers.map(p => p.branch))];
  const semesters = [...new Set(papers.map(p => p.sem))];

  // Filtered Papers Logic
  const filteredPapers = papers.filter(paper =>
    (selectedBranch ? paper.branch === selectedBranch : true) &&
    (selectedSem ? paper.sem === selectedSem : true)
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6 text-black">Previous Year Papers</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {/* Branch Filter */}
          <select
            className="px-4 py-2 border rounded-md text-black"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">All Branches</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>

          {/* Semester Filter */}
          <select
            className="px-4 py-2 border rounded-md text-black"
            value={selectedSem}
            onChange={(e) => setSelectedSem(e.target.value)}
          >
            <option value="">All Semesters</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>{`Semester ${sem}`}</option>
            ))}
          </select>
        </div>

        {/* Display Filtered Papers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper, index) => <DownloadCard key={index} {...paper} />)
          ) : (
            <p className="text-center text-gray-500">No papers found for selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
