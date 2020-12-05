const Zaman = () => {
  const time = () => {
    const e = new Date();
    const tarih = e.toLocaleDateString("tr-TR");
    const saat = e.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const gun = e.toLocaleString("tr-TR", { weekday: "long" });

    const hepsi = `${tarih} | ${saat} | ${gun}`;
    return hepsi;
  };

  return <div>{time()}</div>;
};
export default Zaman;
