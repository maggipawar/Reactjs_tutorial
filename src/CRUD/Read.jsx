import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState("");
  const fetchData = () => {
    axios
      .get(`https://6815963d32debfe95dbbe5e7.mockapi.io/crude`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://6815963d32debfe95dbbe5e7.mockapi.io/crude/${id}`)
      .then(() => {
        fetchData();
      });
  };

  const setLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  // const dark = "table-dark";
  return (
    <div>
      <div className="form-check form-switch mx-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={() => {
            if (darkMode === "table-dark") setDarkMode("");
            else setDarkMode("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>

      <table className={`table ${darkMode}`}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((currentData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td key={currentData.id}>{currentData.id}</td>
                  <td key={currentData.id}>{currentData.name}</td>
                  <td key={currentData.id}>{currentData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-primary"
                        onClick={() =>
                          setLocalStorage(
                            currentData.id,
                            currentData.name,
                            currentData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(currentData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
