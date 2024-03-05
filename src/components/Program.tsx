import { Pagination } from "antd";
import React, { useState, useEffect } from "react";

interface Program {
  id: number;
  name: string;
  description: string;
  broadcastinfo: string;
  programimage?: string;
}

const Programs: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [totalPrograms, setTotalPrograms] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch(
          `http://api.sr.se/api/v2/programs/?format=json&page=${currentPage}&size=${pageSize}`
        );
        if (response.ok) {
          const data = await response.json();
          setPrograms(data.programs);
          setTotalPrograms(data.pagination.totalhits);
        } else {
          console.error("Failed to fetch programs");
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, [currentPage, pageSize]);

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    setPageSize(pageSize || 10);
  };

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <strong>{program.name}</strong> - {program.description}
            <img src={program.programimage} alt={program.name} />{" "}
          </li>
        ))}
      </ul>
      <Pagination
        onChange={handlePageChange}
        current={currentPage}
        total={totalPrograms} 
        pageSize={pageSize}
      />
    </div>
  );
};

export default Programs;
