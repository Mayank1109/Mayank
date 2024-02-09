import React, { useEffect, useState } from "react";
import "../bin/recycleBin.css";
import RoleTable from "./roleTable";
import { useDispatch, useSelector } from "react-redux";

const Role = () => {
  const dispatch = useDispatch();
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httperror, setHttpError] = useState();
  const isOptionsVisible = useSelector(
    (state) => state.option.isOptionsVisible
  );

  useEffect(() => {
    setIsLoading(true);
    const fetchRoles = async () => {
      const response = await fetch(
        "https://react-http-5de29-default-rtdb.firebaseio.com/roles.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }

      const responseData = await response.json();
      //   console.log(responseData);
      const loadedRoles = [];

      for (const key in responseData) {
        loadedRoles.push({
          id: responseData[key].id,
          role_name: responseData[key].role_name,
          active: responseData[key].active,
          no_of_users: responseData[key].no_of_users,
        });
      }

      setRoles(loadedRoles);
    };
    fetchRoles().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  return (
    <>
      <section className="dashboard section">
        <div className=" dash__content ">
          <div className="dash__content btn__grp">
            <h2>Role</h2>
          </div>
          <div className="bin__header">
            {isOptionsVisible && (
              <button className="bin__button">Delete All</button>
            )}
          </div>
        </div>
      </section>

      <section className="dashboard section">
        <RoleTable users={roles} />
      </section>
    </>
  );
};

export default Role;
