import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {
  const [list, setLists] = useState([]);
  const handleAdd = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    setLists([...list, newItem]);
    console.log(list);
  };
  const handleDelete = (id) => {
    setLists(list.filter((list) => list.id !== id));
  };
  return (
    <div>
      <AddItem max={maxLength} list={list.length} handleAdd={handleAdd} />
      {list.map((item) => (
        <ListItem
          key={item.id}
          title={item.title}
          status={item.status}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}

export default List;
