import { useState } from "react";

const CheckBox = ({ list }) => {
  const [checkedList, setCheckedList] = useState(
    list.filter((item) => item.checked)
  );
  const [uncheckedList, setUncheckedList] = useState(
    list.filter((item) => !item.checked)
  );

  const handleCheckBoxChange = (item) => {
    // console.log(e.target.value);
    if (item.checked) {
      setCheckedList(checkedList.filter((i) => i.id !== item.id));
      setUncheckedList([...uncheckedList, { ...item, checked: false }]);
    } else {
      setUncheckedList(uncheckedList.filter((i) => i.id !== item.id));
      setCheckedList([...checkedList, { ...item, checked: true }]);
    }
  };
  return (
    <>
      {/* uncheckedBoc item */}
      <div>
        <h1>Unchecked List</h1>
        <div>
          <ul>
            {uncheckedList.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckBoxChange(item)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* checked Box item */}
      <div>
        <h1>checked List</h1>
        <div>
          <ul>
            {checkedList.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckBoxChange(item)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CheckBox;
