import { Zaman } from "./Zaman";

export const Header = () => {
  return (
    <header>
      <h1 className="title">To Do</h1>
      <div className="header-date">
        <span className="zaman">
          <Zaman />
        </span>
      </div>
    </header>
  );
};
