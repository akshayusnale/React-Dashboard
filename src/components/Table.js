import React, { useEffect, useState, useMemo } from 'react';
import TableContainer from './TableContainer';
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { SelectColumnFilter } from './Filters';

const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch('http://localhost:9000');
      const body = await response.json();
      // console.log(body);
      const contacts = body;
      // console.log(contacts);
      setData(contacts);
    };
    doFetch();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Empi ID",
        accessor: "employee_id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },

      {
        Header: "Last_Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "job_title",
        accessor: "job_title",
      },
      {
        Header: "salary",
        accessor: "salary",
      },
      {
        Header: "department_name",
        accessor: "department_name",
      },
     
    ],
    []
  );

  // return <TableContainer columns={columns} data={data} />;
  return (
    <Container style={{ marginTop: 100 }}>
      <TableContainer columns={columns} data={data} />
    </Container>
  );
};

export default Table;