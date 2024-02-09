import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import UserActions from "./UserActions";
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { optionActions } from "../../store/optionsSlice";

const DataGridDemo = (props) => {
  const dispatch = useDispatch();

  const isModalVisible = useSelector((state) => state.modal.isModalVisible);
  const modalData = useSelector((state) => state.modal.data);
  const [rowId, setRowId] = useState(null);
  const [selectedAll, setSelectedAll] = useState(false);

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "name",
        headerName: "Name",
        width: 170,
        editable: false,
      },
      {
        field: "role",
        headerName: "Role",
        width: 150,
        type: "singleSelect",
        valueOptions: ["user", "admin"],
        editable: true,
      },
      {
        field: "age",
        headerName: "Age",
        // type: "number",
        width: 110,
        editable: false,
      },
      {
        field: "active",
        headerName: "Active",
        type: "boolean",
        editable: "true",
        width: 150,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 350,
        renderCell: (params) => (
          <UserActions {...{ params, rowId: params.row.id, setRowId }} />
        ),
      },
    ],
    []
  );

  const handleSelectionModelChange = (newSelection) => {
    setSelectedAll(
      newSelection.length === props.users.length && newSelection.length > 0
    );
    console.log(selectedAll);
    if (!selectedAll) {
      dispatch(optionActions.display());
    } else {
      dispatch(optionActions.hide());
    }
  };

  return (
    <>
      {isModalVisible && <Modal data={modalData} />}

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={props.users}
          columns={columns}
          getRowId={(row) => row.id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          onRowSelectionModelChange={handleSelectionModelChange}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default DataGridDemo;
