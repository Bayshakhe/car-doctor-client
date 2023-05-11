import { Outlet } from "react-router-dom";
import NavigationBar from "../../shared/navigationBar/NavigationBar";
import Footer from "../../shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="min-h-[calc(100vh-250px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
