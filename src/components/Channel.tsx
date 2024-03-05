import { Pagination } from "antd";
import React, { useState, useEffect } from "react";

interface Channel {
  id: number;
  name: string;
  tagline: string;
  image?: string;
}

const Channels: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [totalChannels, setTotalChannels] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch(
          `https://api.sr.se/api/v2/channels/?format=json&page=${currentPage}&size=${pageSize}`
        );
        if (response.ok) {
          const data = await response.json();
          setChannels(data.channels);
          setTotalChannels(data.pagination.totalhits);
        } else {
          console.error("Failed to fetch channels");
        }
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchChannels();
  }, [currentPage, pageSize]);

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    setPageSize(pageSize || 10);
  };

  return (
    <div>
      <h1>Channels</h1>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            <strong>{channel.name}</strong> - {channel.tagline}
            <img src={channel.image} alt={channel.name} />{" "}
          </li>
        ))}
      </ul>
      <Pagination
        onChange={handlePageChange}
        current={currentPage}
        total={totalChannels}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Channels;
