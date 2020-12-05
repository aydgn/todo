import React, { useState, useEffect } from "react";

const ZamanBar = () => {
  // Zamanı göstermek için
  const Time = () => {
    const d = new Date();
    const tarih = d.toLocaleDateString("tr-TR");
    const saat = d.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const gun = d.toLocaleString("tr-TR", { weekday: "long" });
    const hepsi = ` ${tarih} | ${saat} | ${gun}`;
    return hepsi;
  };

  const defaultName = () => {
    return window.localStorage.getItem("name") || "(ismini girmek için tıkla)";
    // default name localstorage'da varsa getir yoksa yazıyı göster.
  };
  const [name, setname] = useState(defaultName);

  useEffect(() => {
    document.title = `${name}'s To Do List`;
    localStorage.setItem("name", name);
  });

  return (
    <div>
      <span
        onClick={() => {
          setname(prompt("Adın ne şekerlik?"));
        }}
      >
        Merhaba, {name}.
      </span>
      {Time()}
    </div>
  );
};
export default ZamanBar;
