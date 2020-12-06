import ZamanBar from "./ZamanBar";

const Header = () => {
  return (
    <header>
      <h1 className="title">TO DO LIST</h1>
      <div className="header-date">
        <span className="zaman">
          <ZamanBar />
        </span>
      </div>
    </header>
  );
};

export default Header;
