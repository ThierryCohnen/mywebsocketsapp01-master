import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { sizing } from '@material-ui/system';
const useStyles = makeStyles({
    table: {
        // minWidth: 650,
        // padding: "0px 8px"
    },
});
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
export default function DenseTable(element) {
    const classes = useStyles();
    const el = element.element;
    const rp = element.riskPercentage;
    const cl = (element.element * 1.1).toFixed(2);
    const rows = [
        // createData('', 159, 6.0, '', 4.0),
        // createData('', 237, 9.0, 37, 4.3),
        createData('1', '2', "Initial Capital", el, rp + '%'),
        createData('2', '3', 'Risk(%)', cl, ''),
        // createData('', 356, 16.0, 49, 3.9),
    ];
    return (
        <div style={{ height: '100px', width: '100%' }}>
            {/* <Paper style={{ padding: '10', height: '70%', width: '30%', backgroundColor: 'lightgrey', margin: 'auto' }}> */}
                {/* <TableContainer component={Paper} width={100} > */}
                <Table size="small" aria-label="a dense table" style={{ height: '100%', width: '25%', backgroundColor: 'lightblue' }}>
                    {/* <Table width={100} className={classes.table} size="small" aria-label="a dense table"> */}

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} >

                                <TableCell align="left" width={'10%'}>{row.fat}</TableCell>
                                {row.carbs < 100 ?
                                    <TableCell align="right" width={'40%'} >{row.carbs}</TableCell>
                                    : row.carbs > 100 & row.carbs <= 135 ?
                                        <TableCell align="right" width={'40%'} style={{ backgroundColor: 'red', color: 'white' }}>{row.carbs}</TableCell>
                                        : row.carbs > 135 & row.carbs <= 148 ?
                                            <TableCell align="right" width={'40%'} style={{ backgroundColor: 'blue', color: 'white' }}>{row.carbs}</TableCell>
                                            : row.carbs > 148 &&
                                            <TableCell align="right" width={'40%'} style={{ backgroundColor: 'green', color: 'white' }}>{row.carbs}</TableCell>
                                }

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            {/* </Paper> */}
            {/* </Paper> */}
        </div>
    );
}