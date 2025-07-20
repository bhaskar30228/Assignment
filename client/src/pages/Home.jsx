import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import UserMain from '../components/UserMain';
const Home = () => {
  return (
    <div className="home-layout">
      <Navbar />
      <div className="main-body">
        <Sidebar />
        <div className="content-area">
         <Main/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
