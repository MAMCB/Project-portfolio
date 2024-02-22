import React from 'react'

const Home = () => {
  return (
    <div className=" p-10 md:flex md:flex-col md:h-screen md:p-0">
      <div className="md:flex-1 md:flex md:items-center md:justify-center">
        <img
          className="h-96 mr-10 rounded-full"
          src="https://avatars.githubusercontent.com/u/96302464?v=4"
          alt="Personal photo"
        />
        <h1 className="text-6xl font-bold ml-10 dark:text-white">Welcome to my portfolio</h1>
      </div>
    </div>
  );
}

export default Home