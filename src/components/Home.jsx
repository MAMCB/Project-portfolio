import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex items-center justify-center">
        <img
          className="h-96 mr-10 rounded-full"
          src="https://avatars.githubusercontent.com/u/96302464?v=4"
          alt="Personal photo"
        />
        <h1 className="text-6xl font-bold ml-10">Welcome to my portfolio</h1>
      </div>
    </div>
  );
}

export default Home