import { Outlet } from "react-router";

const MainPage = () => {
  return (
    <>
      <h1>Main page</h1>
      <Outlet />
    </>
  );
};

export default MainPage;
