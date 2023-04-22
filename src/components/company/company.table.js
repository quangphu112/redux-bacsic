import { DataGrid } from '@mui/x-data-grid';
const CompanyTable = (props) => {
    return (
        <DataGrid
        rows={props.row}
        columns={props.columns}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        />
    )
}

export default CompanyTable;