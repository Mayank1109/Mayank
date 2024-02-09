import React, { useEffect, useState } from "react";
import "./recycleBin.css";
import DataGridDemo from "../User/user";
import { useSelector } from "react-redux";

const RecycleBin = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httperror, setHttpError] = useState();
  const isOptionsVisible = useSelector(
    (state) => state.option.isOptionsVisible
  );

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://react-http-5de29-default-rtdb.firebaseio.com/users.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }

      const responseData = await response.json();
      // console.log(responseData);
      const loadedUsers = [];

      for (const key in responseData) {
        loadedUsers.push({
          id: responseData[key].id,
          name: responseData[key].name,
          active: responseData[key].active,
          age: responseData[key].age,
          role: responseData[key].role,
        });
      }

      setUsers(loadedUsers);
    };
    fetchUsers().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  return (
    <>
      <section className="dashboard section">
        <div className=" dash__content ">
          <div className="dash__content btn__grp">
            <h2>Users</h2>
          </div>
          <div className="bin__header">
            {/* <button className="bin__button">Empty Recycle bin</button> */}

            {isOptionsVisible && (
              <button className="bin__button">Delete All</button>
            )}
          </div>
        </div>
      </section>

      <section className="dashboard section">
        <DataGridDemo users={users} />
      </section>
    </>
  );
};

export default RecycleBin;
