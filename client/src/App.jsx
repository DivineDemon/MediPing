import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import "./App.css";
import Cookies from "universal-cookie";

// Components
import { ChannelListContainer, ChannelContainer, Auth } from "./components";

const apiKey = "zbdtps6ev55r";
const client = StreamChat.getInstance(apiKey);
const authToken = false;

const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
