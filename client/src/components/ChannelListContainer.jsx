/* eslint-disable */

import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import {
  ChannelSearch,
  TeamChannelList,
  TeamChannelPreview,
  Sidebar,
  CompanyHeader,
} from "./";

const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
      </div>
    </>
  );
};

export default ChannelListContainer;
