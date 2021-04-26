import React, { Suspense } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import './App.css';
import socketIOClient from "socket.io-client";
import MyCard from './MyCard'
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import Table from './components/Table'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

let currentData = []
const ENDPOINT = "http://192.168.1.13:4001";
// let i = 0;
let myNYTimesData = [];
fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tesla&api-key=XoAe1hACmjNT127YvGTLOKkFVrGyCXqQ')
  .then(response => response.json())
  .then(data => console.log(myNYTimesData = [...data.response.docs]));
console.log(myNYTimesData)
// function addMyData() {
//   let ul = document.getElementById("myULNY");
//   myNYTimesData.forEach(element => {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(element.abstract));
//     ul.appendChild(li);
//   });
//   // li.appendChild(document.createTextNode(myNYTimesData[0].abstract));
// }
console.log('app')
function App() {
  const [response, setResponse] = useState([12, 19, 3, 5, 2, 3]);
  const [response01, setResponse01] = useState([]);
  const [response02, setResponse02] = useState([]);
  const [count, setCount] = useState(0);
  const [buttonsOnCanvos, setButtonsOnCanvos] = useState([]);
  const [horizLine, setHorizLine] = useState(137);
  const [hl, sethl] = useState(0);
  let temp = [];
  // let temp02 = [];
  function dataToCards() {
    // console.log(myNYTimesData);
    // el={(...item.keywords.value)}
    let itemList = myNYTimesData.map((item, index) => {
      // console.log(item.keywords[0].value);
      let itemPush = []
      item.keywords.forEach(el => itemPush.push(el.value, "---"))
      console.log("itemPush: ", itemPush)
      itemPush.length = itemPush.length - 1
      console.log("itemPush removed: ", itemPush)
      return <div key={index}> <MyCard element={item.abstract}
        el01={itemPush}
      // el02={"essai01"}
      /></div>;
    })
    setButtonsOnCanvos([...buttonsOnCanvos, itemList]);
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
    setResponse02({
      labels: [dc],
      datasets: [{
        label: 'Stock Quote',
        data: [dc],
        backgroundColor: [
          ac,
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          // 'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    })
  }
  let optionsChart = {
    animation: {
      duration: 0
    },
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: horizLine,
        borderColor: 'red',
        // borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
        label: {
          enabled: false,
          content: 'Test label'
        }
      },
      {
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: hl * 1.02,
        borderColor: 'grey',
        // borderColor: 'rgb(75, 192, 192)',
        borderWidth: 4,
        label: {
          enabled: false,
          content: 'Test label'
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
  return (
    <div className="App">
      <h1>Real Time Stock Quotes</h1>
      <Grid container spacing={3} style={{ width: '60%' }}>
        <Grid item xs style={{ width: '35%' }}>
          <div style={styles}>
            <Bar data={response02} options={optionsChart} />
          </div>
        </Grid>
        <Grid item xs style={{ width: '10%' }}>
          <div style={styles01}>
            <Line data={response01} options={optionsChart} />
          </div>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
      <Table element={hl} />
      {/* <p>
        It's <time dateTime={response.date}   >{response.date} <br></br> {response.quote}</time>
      </p>
      <p>
        It's {count}
      </p>  */}
      <Grid item xs>
        <br></br>
        <Button variant="contained" color="primary" onClick={() => {
          setHorizLine(horizLine - 1);
        }}>
          HorizLine -1</Button>
        <Button startIcon={<CloudUploadIcon />} variant="contained" color="primary" onClick={() => {
          setHorizLine(horizLine + 1);
        }}>
          HorizLine +1</Button>
        <Button variant="contained" color="primary" startIcon={<AddIcCallIcon />} onClick={() => {
          dataToCards();
        }}>
          Data to Cards Inside</Button>
        <button onClick={() => {
          setButtonsOnCanvos([]);
          // console.log(buttonsOnCanvos);
        }}>Remove Cards</button>
        <button id={15} onClick={(e) => {
          setButtonsOnCanvos([...buttonsOnCanvos, <MyCard element={'gentil'} el={e.target.id} />]);
          // console.log(buttonsOnCanvos);
          // console.log(this.button.id);
        }}>Add My Cards</button>
      </Grid>
      <div className="container">{buttonsOnCanvos}</div>
    </div>
  );
}
export default App;
