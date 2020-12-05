import Zaman from "./Zaman";

const Header = () => {
  return (
    <header>
      <h1 className="title">TO DO LIST</h1>
      <div className="header-date">
        <span className="zaman">
          <Zaman />
        </span>
      </div>
    </header>
  );
};

export default Header;
