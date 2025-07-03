import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import EditProfile from '../components/EditProfile';

const EditProfilePage = () => {
  return (
    <div className="home-layout">
      <Navbar />
      <div className="main-body">
        <Sidebar />
        <div className="content-area">
          <EditProfile />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
