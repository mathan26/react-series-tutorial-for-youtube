import React, { useState } from "react";

const ListandKeysExample1 = () => {
  const [lists, setLists] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const listOfObjects = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "David", age: 35 },
    { id: 5, name: "Eve", age: 22 },
  ];

  const removeItem = (index) => {
    setLists(lists.filter((_, i) => i != index));
  };

  return (
    <div>
      <h1>List and Keys</h1>
      <ul>
        {lists?.map((item, index) => {
          return (
            <li key={item} onClick={() => removeItem(index)}>
              {item}
            </li>
          );
        })}
      </ul>
      {/* Do the exercise with listOfObjects */}
    </div>
  );
};

export default ListandKeysExample1;
