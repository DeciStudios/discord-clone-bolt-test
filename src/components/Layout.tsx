import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import MemberList from './MemberList';

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Routes>
        <Route
          path="/:serverId/:channelId"
          element={
            <div className="flex flex-1">
              <ChatArea />
              <MemberList />
            </div>
          }
        />
        <Route
          path="/@me"
          element={
            <div className="flex-1 flex items-center justify-center text-white">
              <p>Select a server or start a conversation</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}