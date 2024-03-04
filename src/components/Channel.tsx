import React, { useState, useEffect } from 'react';

interface Channel {
  id: number;
  name: string;
  tagline: string;
}

const Channels: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch('https://api.sr.se/api/v2/channels/?format=json');
        if (response.ok) {
          const data = await response.json();
          setChannels(data.channels);
        } else {
          console.error('Failed to fetch channels');
        }
      } catch (error) {
        console.error('Error fetching channels:', error);
      }
    };

    fetchChannels();
  }, []);

  return (
    <div>
      <h1>Channels</h1>
      <ul>
        {channels.map(channel => (
          <li key={channel.id}>
            <strong>{channel.name}</strong> - {channel.tagline}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Channels;
