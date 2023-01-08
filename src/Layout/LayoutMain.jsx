import Header from "../Pages/Header/Header";

const LayoutMain = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default LayoutMain;
