import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});
let index = 0;
export default function App(props) {
    //   const [table, setTable] = useState([]);
    const classes = useStyles();
    //   const addARow = () => {
    //     console.log(index);
    //     console.log(table);
    //     let rowReturned = () => {
    //       return (
    //         <TableRow key={index}>
    //           <TableCell>Dessert (100g serving)</TableCell>
    //           <TableCell>Dessert (100g serving)</TableCell>
    //         </TableRow>
    //       );
    //     };
    //     index++;
    //     setTable((table) => [...table, rowReturned()]);
    //   };
    return (
        <div className="App">
            {/* <button onClick={addARow}>Add a row</button> */}
            <TableContainer style={{ height: 600 }} component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {/* <TableCell align="center">Risk Percentage&nbsp;(%)</TableCell> */}
                        <TableCell align="center">Number of Actions Bought/Sold</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Remaining Actions</TableCell>
                        <TableCell align="right">Remaining Capital</TableCell>
                        <TableCell align="right">Time of Transaction</TableCell>

                        {/* <TableCell align="right">Index</TableCell> */}
                        {/* <TableCell align="right">{props.hl}</TableCell> */}
                        {/* <TableCell >{props.riskPercentage}%</TableCell> */}
                        {/* <TableCell >{props.hl * (1 - (props.riskPercentage/100))}</TableCell> */}


                        {/* hl * (1 - (riskPercentage/100)) */}


                    </TableRow>
                </TableHead>
                <TableBody>{props.table}</TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}
