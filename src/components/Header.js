export const Header = () => {
  var e = new Date();
  var date = e.toLocaleDateString("tr-TR");
  var time = e.toLocaleTimeString("tr-TR");
  var day = e.toLocaleString("tr-TR", { weekday: "long" });

  return (
    <div className="header">
      <div className="header-title">
        <h1 className="title">To Do</h1>
      </div>
      <div className="header-date">
        <span className="zaman">
          {date} {day} - {time}
        </span>
      </div>
    </div>
  );
};
