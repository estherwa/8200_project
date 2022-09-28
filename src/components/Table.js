import {useEffect, useState} from "react";
import axios from 'axios';
import {DataGrid} from '@mui/x-data-grid';
import {Button} from "@mui/material";
import { CSVLink } from "react-csv";

const url = 'http://127.0.0.1:8000/patient'

const columns = [


    {field: 'Id', headerName: 'Id', width: 70},
    {field: 'FirstName', headerName: 'First Name', width: 100},
    {field: 'LastName', headerName: 'Last Name', width: 100},
    {field: 'Date', type:'dateTime', headerName: 'Date', width: 100},
    {field: 'Address', headerName: 'Address', width: 100},
    {field: 'City', headerName: 'City', width: 100},
    {field: 'ZipCode', headerName: 'Zip Code', width: 100},
    {field: 'LandLine', headerName: 'Land Line', width: 100},
    {field: 'NumberPhone', headerName: 'Number Phone', width: 100},
    {field: 'Covid',type:'boolean' ,headerName: 'Covid', width: 100},
    {field: 'Diabetes', type:'boolean' ,headerName: 'Diabetes', width: 100},
    {field: 'CardioVascular', type:'boolean' ,headerName: 'Cardio Vascular', width: 100},
    {field: 'Allergies', type:'boolean' ,headerName: 'Allergies', width: 100},
    {field: 'OtherCondition', type:'boolean' , headerName: 'Other Condition', width: 100},



]

export default function Table(props) {

    const [data, setData] = useState({});
    const [isLoading] = useState(false);
    const [isError] = useState(false);

    const fetchData = async () => {

        const result = await axios.get(
            'http://127.0.0.1:8000/patient'
        )

        setData(result.data);

    }

    useEffect(() => {
        fetchData();
    }, []);

    return (<>
        <br/>
        <img src="../images/8200.jpeg" width="500px" className="img-fluid" alt="logo"/>
        <br/><br/><br/>

        {isLoading ? (
            <div className="alert alert-warning">This is loading ...</div>
        ) : (
            <div style={{height: 450}}>
                <DataGrid rows={Object.values(data)} getRowId={(row) => row.Id} columns={columns}
                          disableSelectionOnClick/>
            </div>
        )}

        {isError && <div>Something has gone wrong ...</div>}
            <br/>
        <Button onClick={fetchData}  class="button button2">Refresh the table</Button>

        <CSVLink data={Object.values(data)} filename={'patients.csv'}>
            <br/>
            <br/>
            <Button class="Button_1"> Here you can download in Excel</Button>
        </CSVLink>
    </>)
}