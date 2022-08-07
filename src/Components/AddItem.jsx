import { useState } from "react";

function AddItem({ handleAdd, list, max }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const click = () => {
    handleAdd(text);
    setText("");
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={text}
        data-testid="input"
        placeholder="add something"
      />
      <button disabled={list === max} onClick={click} data-testid="add-btn">
        ADD
      </button>
    </div>
  );
}

export default AddItem;
