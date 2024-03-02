"use client";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "avatar", headerName: "Avatar", width: 150 },
  { field: "username", headerName: "Username", width: 150 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "role", headerName: "Role", width: 150 },
];

const UserTable = ({ rows }) => {
  return (
    <div className="h-full w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        slots={{
          toolbar: GridToolbar,
        }}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserTable;
