import { Zaman } from "./Zaman";

export const Header = () => {
  return (
    <header>
      <div className="header-title">
        <h1 className="title">To Do</h1>
      </div>
      <div className="header-date">
        <span className="zaman">
          <Zaman />
        </span>
      </div>
    </header>
  );
};
