import ZamanBar from "./ZamanBar";

const Header = () => {
  return (
    <header className="m-0 pt-5 bg-dark text-white">
      <h1 className="display-1 text-center font-weight-bold border-bottom border-secondary ">
        TO DO
      </h1>
      <div className="header-date">
        <span className="zaman">
          <ZamanBar />
        </span>
      </div>
    </header>
  );
};

export default Header;
