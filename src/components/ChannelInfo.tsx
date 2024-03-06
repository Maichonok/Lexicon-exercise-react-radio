import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Channel {
  id: number;
  name: string;
  tagline: string;
  image?: string;
  siteurl: string;
  liveaudio: {
    url: string;
  };
}

interface ChannelInfoProps {
  channelId: number;
}

const ChannelInfo: React.FC<ChannelInfoProps> = ({ channelId }) => {
  const [channelInfo, setChannelInfo] = useState<Channel | null>(null);
  const { channelId: paramChannelId } = useParams<{ channelId: string }>();

  useEffect(() => {
    const fetchChannelInfo = async () => {
      try {
        const response = await fetch(
          `https://api.sr.se/api/v2/channels/${channelId || paramChannelId}?format=json`
        );
        if (response.ok) {
          const data = await response.json();
          setChannelInfo(data.channel);
        } else {
          console.error("Failed to fetch channel info");
        }
      } catch (error) {
        console.error("Error fetching channel info:", error);
      }
    };

    fetchChannelInfo();
  }, [channelId, paramChannelId]);

  if (!channelInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{channelInfo.name}</h2>
      <p>{channelInfo.tagline}</p>
      <p>
        Site URL:{" "}
        <a href={channelInfo.siteurl} target="_blank" rel="noopener noreferrer">
          {channelInfo.siteurl}
        </a>
      </p>
      <audio controls>
        <source src={channelInfo.liveaudio.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default ChannelInfo;
