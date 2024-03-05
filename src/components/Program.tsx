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

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch(
          "http://api.sr.se/api/v2/programs/?format=json"
        );
        if (response.ok) {
          const data = await response.json();
          setPrograms(data.programs);
        } else {
          console.error("Failed to fetch programs");
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []);

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
    </div>
  );
};

export default Programs;
