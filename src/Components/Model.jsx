import React from 'react';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ClearIcon from '@mui/icons-material/Clear';

const Model = ({ isOpen, onClose }) => {
    
  return (
    <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black/70 z-50 ${isOpen ? '' : 'hidden'}`}>

      <div className="p-8 h-auto lg:w-[500px] bg-white rounded-2xl shadow-[0px_18px_10px_-22px_rgba(0,0,0,0.74)]">
        <div className="flex justify-end">
          {/* Optional: Close Button */}
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 font-bold text-2xl"><ClearIcon/></button>
        </div>

        <h1 className="text-center font-bold text-gray-900 text-2xl">Welcome To EstateHouse</h1>
        <p className="text-center text-orange-500 font-semibold">Login to get Started</p>

        <form className="mt-4 space-y-4">
          <div className="hover:shadow-xl transition-all">
            <label htmlFor="name" className="font-bold block">Name*</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="w-full p-2 border border-gray-800 rounded mt-2 outline-none"
            />
          </div>

          <div className="hover:shadow-xl transition-all">
            <label htmlFor="email" className="font-bold block">Email*</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full p-2 border border-gray-800 rounded mt-2 outline-none"
            />
          </div>

          <div className="hover:shadow-xl transition-all">
            <label htmlFor="password" className="font-bold block">Password*</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-full p-2 border border-gray-800 rounded mt-2 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-sm">Remember Me!</label>
          </div>

          <button
            className="bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors py-2 px-8 rounded-xl w-full flex justify-center items-center gap-2"
          >
            <DriveFileRenameOutlineIcon />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Model;
