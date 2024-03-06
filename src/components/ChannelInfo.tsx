import React from "react";

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
  channel: Channel;
}

const ChannelInfo: React.FC<ChannelInfoProps> = ({ channel }) => {
  return (
    <div>
      <h2>{channel.name}</h2>
      <p>{channel.tagline}</p>
      <p>Site URL: {channel.siteurl}</p>
      <audio controls>
        <source src={channel.liveaudio.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default ChannelInfo;
