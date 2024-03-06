import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Program {
  id: number;
  name: string;
  broadcastinfo: string;
  programurl: string;
}

interface ProgramInfoProps {
  programId: number;
}

const ProgramInfo: React.FC<ProgramInfoProps> = ({ programId }) => {
  const [programInfo, setProgramInfo] = useState<Program | null>(null);
  const { programId: paramProgramId } = useParams<{ programId: string }>();

  useEffect(() => {
    const fetchProgramInfo = async () => {
      try {
        const response = await fetch(
          `https://api.sr.se/api/v2/programs/${
            programId || paramProgramId
          }?format=json`
        );
        if (response.ok) {
          const data = await response.json();
          setProgramInfo(data.channel);
        } else {
          console.error("Failed to fetch channel info");
        }
      } catch (error) {
        console.error("Error fetching channel info:", error);
      }
    };

    fetchProgramInfo();
  }, [programId, paramProgramId]);

  if (!programInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{programInfo.name}</h2>
      <p>{programInfo.broadcastinfo}</p>
      <p>
        Site URL:{" "}
        <a
          href={programInfo.programurl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {programInfo.programurl}
        </a>
      </p>
    </div>
  );
};

export default ProgramInfo;
