import React, { useState } from "react";

function TodoForm(props) {
  // input ile state değişimi yapacağız
  // eslint-disable-next-line
  const [input, setInput] = useState("");

  // inputta değişiklik olunca çalışacak func
  const handleChange = (e) => {
    setInput(e.target.value);
    // submit edilecek değeri setInput değişkenine ata dedik
  };

  // submit butonuna basınca yapılacak şey için func
  const handleSubmit = (e) => {
    // submit butonuna basınca default olarak sayfa yenileniyor.
    // bunu önlemek için preventDefault kullanıyoruz.
    e.preventDefault();

    /* // her şey bitince geri döneceğim buraya ??
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    }); */
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          placeholder=""
          value={input} // state de tanımladığımız input
          onChange={handleChange}
          autoFocus
          autoComplete="false"
        />
        <button className="todo-button">+</button>
      </form>
    </div>
  );
}

export default TodoForm;
