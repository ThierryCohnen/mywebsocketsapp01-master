import { Line, Bar } from 'react-chartjs-2'
import React, { useState, useEffect } from 'react'
import './App.css';
import socketIOClient from "socket.io-client";
import MyCard from './MyCard'
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import Table from './components/Table'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
// import { sizing } from '@material-ui/system';
import TableBuySell from './components/TableBuySell'
import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from '@material-ui/core/TextField';
let numberOfActions01 = 0;
let totalActions = 0;
let remainingCapital = 10000;
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
let currentData = []
let index = 0;
const ENDPOINT = "http://192.168.1.13:4001";
// let i = 0;
let myNYTimesData = [];
fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tesla&api-key=XoAe1hACmjNT127YvGTLOKkFVrGyCXqQ')
  .then(response => response.json())
  .then(data => console.log(myNYTimesData = [...data.response.docs]));
console.log(myNYTimesData)
function App() {
  const [table, setTable] = useState([]);
  const [response, setResponse] = useState([12, 19, 3, 5, 2, 3]);
  const [response01, setResponse01] = useState([]);
  const [response02, setResponse02] = useState([]);
  const [count, setCount] = useState(0);
  const [buttonsOnCanvos, setButtonsOnCanvos] = useState([]);
  const [horizLine, setHorizLine] = useState(137);
  const [hl, sethl] = useState(0);
  const [riskPercentage, setRiskPercentage] = useState(0);
  const [numberOfActions, setNumberOfActions] = useState(0);
  const [remainingActions, setRemainingActions] = useState(0);
  let temp = [];
  const onChangePercentRisk = (event) => {
    setRiskPercentage(event.target.value);
  };
  function dataToCards() {
    let j = buttonsOnCanvos.flat().length;
    let itemList = myNYTimesData.map((item, index) => {
      let itemPush = []
      item.keywords.forEach(el => itemPush.push(el.value, "---"))
      itemPush.length = itemPush.length - 1
      j++;

      return <div key={j}> <MyCard elIndex={j} element={item.abstract}
        el01={itemPush} onClick={value => {
          removeCard(value);
        }}
      /></div>;
    })
    currentData.push(itemList);
    let currentData01 = currentData.flat()
    setButtonsOnCanvos([...buttonsOnCanvos, itemList]);
    let ui = [...buttonsOnCanvos]
    function removeCard(value) {
      let currentData02 = currentData01.filter(index => index.key != value);
      currentData01 = currentData02;
      setButtonsOnCanvos([buttonsOnCanvos, currentData02]);
    }
  }
  let y = [];
  // let dc = 0;
  let ac;
  function chart(dc, ac) {
    setResponse01({
      labels: y,
      datasets: [{
        label: 'Stock Quote',
        fill: false,
        data: temp,
        backgroundColor: [
          ac
        ],
        hoverBackgroundColor: [
          ac
        ],
        borderColor: [
          ac
        ],
        borderWidth: 5
      }]
    })
  }
  let optionsChart = {
    animation: {
      duration: 0
    },
    scales: {
      yAxes: [{
        stacked: false,
        position: "right",
        // ticks: { min: Number(Math.min(temp)) - 5, max: Number(Math.max(temp)) + 5 }
      }]
    },
    annotation: {
      annotations: [
        // {
        //   type: 'line',
        //   mode: 'horizontal',
        //   scaleID: 'y-axis-0',
        //   value: horizLine,
        //   borderColor: 'red',
        //   // borderColor: 'rgb(75, 192, 192)',
        //   borderWidth: 1,
        //   label: {
        //     enabled: false,
        //     content: 'Test label'
        //   }
        // },
        {
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: hl * (1 - (riskPercentage / 100)),
          borderColor: 'grey',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 2,
          label: {
            enabled: true,
            content: (hl * (1 - (riskPercentage / 100))).toFixed(2)
          }
        }
      ]
    },
    maintainAspectRatio: false
  }
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, { transports: ['websocket', 'polling'] });
    socket.on("FromAPI", data => {
      temp.push(data.quote);
      y.push(data.date);
      if (temp.length > 20) {
        temp.shift()
        y.shift()
      }
      let dc = data.quote
      sethl(data.quote);
      setResponse(data);
      setResponse01(temp);
      setResponse02(prevCount => dc);
      const handleClick = () => setCount(prevCount => prevCount + 1)
      handleClick()
      if (dc - 135 < 0) {
        ac = 'rgba(75, 192, 192, 0.2)'
      }
      else {
        ac = 'rgba(255, 99, 132, 0.2)'
      }
      chart(dc, ac)
    });
  }, []);
  let styles = {
    position: 'relative', height: '25vh', width: '20vw'
  }
  let styles01 = {
    position: 'relative', height: '20vh', width: '70vw'
  }
  const addARow = (a) => {
    // console.log(index);
    // console.log(table);
    // console.log("rendered addARow");
    // value={numberOfActions}
    // setNumberOfActions(number => number + (numberOfActions*a));
    // actionsTransaction = actionsTransaction + (numberOfActions*a)
    remainingCapital += Number((numberOfActions01 * hl * (-a)).toFixed(2))
    let d = new Date().toDateString();
    // console.log("a:", a)
    // console.log("remainingCapital:", remainingCapital)
    // console.log("buy/sell to add:", Number((numberOfActions01 * hl * (-a)).toFixed(2)))
    let rowReturned = () => {
      return (
        <TableRow>
          {/* // <TableRow key={index}> */}
          {/* <TableCell align="center">{riskPercentage}</TableCell> */}
          <TableCell align="center">{numberOfActions01 * a}</TableCell>
          <TableCell align="center">{hl}</TableCell>
          <TableCell align="center">{((numberOfActions * hl * (-a))).toFixed(2)}</TableCell>
          <TableCell align="center">{totalActions}</TableCell>
          <TableCell align="center">{remainingCapital}</TableCell>
          {/* <TableCell align="center">{index}</TableCell> */}
          <TableCell align="center">{d}</TableCell>
        </TableRow>
      )
    };
    index++;
    // console.log("table: ", ...table)
    setTable((table) => [rowReturned(), ...table]);
    // setTable((table) => [table.push(rowReturned())]);
  };
  useEffect(() => {
    console.log("numberOfActions: ", numberOfActions)
    numberOfActions01 = Number(numberOfActions);
  }, [numberOfActions]);
  return (
    <div className="App">
      <h1>Real Time Stock Quotes</h1>
      <Grid container spacing={3} >
        {/* <Grid container spacing={3} style={{ width: '60%' }}> */}
        <Grid item xs={12} sm={8} style={{ width: '10%' }}>
          <div style={styles01}>
            <Line data={response01} options={optionsChart} />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div>
            <div>
              <Button variant="contained" color="primary" disabled={remainingCapital - (numberOfActions01 * hl) <= 0 ? true : false} onClick={() => { totalActions = Number(totalActions) + Number(numberOfActions01); addARow(1); }}>Buy</Button>&nbsp;
      <Input id="inputActions" style={{ align: "right", width: '2%' }} onChange={(e) => { setNumberOfActions(e.target.value); }} /> &nbsp;
      <Button variant="contained" color="primary" disabled={totalActions <= 0 ? true : false} onClick={() => { totalActions = Number(totalActions) - Number(numberOfActions01); addARow(-1); }}>Sell</Button>
              <br></br>
              <Button variant="contained" color="primary" disabled={totalActions <= 0 ? true : false} onClick={() => { numberOfActions01 = totalActions; totalActions = 0; addARow(-1); }}>Sell All {numberOfActions01} actions</Button>
              <Button disabled={Math.floor(remainingCapital / hl) < 1 ? true : false} variant="contained" color="primary" onClick={() => { numberOfActions01 = Math.floor(remainingCapital / hl); totalActions = numberOfActions01; addARow(1); }}>Buy All {Math.floor(remainingCapital / hl)} actions</Button>
            </div>
            <label style={{ backgroundColor: "lightblue" }} >Risk Percentage taken:
      </label>&nbsp; &nbsp;
      <Input style={{ textAlign: "center", width: '5%' }} startAdornment={<InputAdornment position="start">%</InputAdornment>} value={riskPercentage} onChange={onChangePercentRisk} /> &nbsp; &nbsp;
      <Button disabled={riskPercentage <= 0 ? true : false} variant="contained" color="primary" onClick={() => setRiskPercentage((Number(riskPercentage) - 1).toFixed(2))}>-1%</Button>
            <Button variant="contained" color="primary" onClick={() => setRiskPercentage((Number(riskPercentage) + 1).toFixed(2))}>+1%</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TableBuySell table={table} hl={hl} riskPercentage={riskPercentage}></TableBuySell>
        </Grid>
        <Grid item xs={12} sm={5} style={{}}>
          <div>
            <div style={{
              width: '20%',
              marginRight: 'auto',
              marginLeft: 'auto'
            }}>
              <Table element={hl} riskPercentage={riskPercentage} />
            </div>
          </div>
          <br></br>
          <Button variant="contained" color="primary" startIcon={<AddIcCallIcon />} onClick={() => {
            dataToCards();
          }}>
            Data to Cards Inside</Button>
          <Button variant="contained" color="primary" onClick={() => {
            setButtonsOnCanvos([]);
          }}>Remove Cards</Button>
          <div>
            <div style={{
              // width: '60%',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}><Carousel centerMode={true} showDots={true} responsive={responsive}>{buttonsOnCanvos}</Carousel></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;