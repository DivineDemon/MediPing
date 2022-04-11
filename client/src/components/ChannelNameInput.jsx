import React from "react";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setChannelName(e.target.value);
  };

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        type="text"
        value={channelName}
        onChange={handleChange}
        placeholder="channel-name"
      />
      <p>Add Members</p>
    </div>
  );
};

export default ChannelNameInput;
