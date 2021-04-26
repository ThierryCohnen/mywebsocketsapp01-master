import { Line, Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import './App.css';
import socketIOClient from "socket.io-client";
let currentData = []
const ENDPOINT = "http://192.168.1.13:4001";
let i = 0;
function App() {
  const [response, setResponse] = useState([12, 19, 3, 5, 2, 3]);
  const [response01, setResponse01] = useState([]);
  const [response02, setResponse02] = useState([]);
  const [count, setCount] = useState([5]);

  let temp = [];
  let temp02 = [];
  let y = []
  const chart = () => {
    // console.log("response01:", ...response01)
    // console.log("response02:", response02)
    setResponse01({
      labels: y,
      // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Stock Quote',
        fill: false,
        data: temp,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
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
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    })
    console.log("count: ", count)
    setResponse02({
      labels: ['current'],
      // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Stock Quote',
        // fill: false,
        data: count,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
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
          'rgba(255, 99, 132, 1)',
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
    maintainAspectRatio: false
  }
  useEffect(() => {
    // const socket = socketIOClient(ENDPOINT);
    const socket = socketIOClient(ENDPOINT, { transports: ['websocket', 'polling'] });
    socket.on("FromAPI", data => {
      // currentData.push(data.quote);
      temp.push(data.quote);
      y.push(data.date);
      // console.log("temp");
      console.log("temp", ...temp);
      // console.log("y");
      // console.log("y", ...y);
      // currentData.push({ date: i, quote: data.quote });
      // currentData.push({ date: Date.now(), quote: data.quote });
      i++
      // currentData = [...currentData, data.quote];
      // console.log("data")
      // console.log(data)
      // console.log(currentData);
      // chart.data.datasets.data.push(data.quote);
      // if (currentData.length > 10) {
      //   // currentData.shift()
      //   // currentData.splice(0, 1)
      // }
      if (temp.length > 20) {
        // currentData.shift()
        // temp.splice(0, 1)
        temp.shift()
        y.shift()
        // currentData.shift()
      }
      // console.log("currentData");
      // console.log("currentData", ...currentData);
      // console.log(data);
      // setResponse(data);
      // let temp01 = temp
      // let temp02 = temp
      // let temp02 = temp[temp.length-1]
      let dc = data.quote
      setResponse(data);
      setResponse01(temp);
      setResponse02(prevCount => dc);
      setCount(prevCount => prevCount = dc)
      console.log("response01:", response01)
      console.log("response02:", response02)
      console.log("temp02:", temp02)
      console.log("data quote ", [data.quote])
      dc = []
      chart()
      // chart01()
      // width="200%" height= "200%"
      // setResponse(currentData => [...currentData, data]);
    });
  }, []);
  let styles = {
    position: 'relative', height: '60vh', width: '80vw'
  }
  return (
    <div className="App">
      <h1>Real Time Stock Quotes</h1>
      <div style={styles}>
        <Bar data={count} options={optionsChart} />
        {/* <Line data={response01} options ={optionsChart} /> */}
        {/* <Line data={data} options={options} /> */}
      </div>
      <div>
        <Line data={response01} options={optionsChart} />
      </div>
      <p>
        It's <time dateTime={response.date}   >{response.date} <br></br> {response.quote}</time>
      </p>
      <p>
        It's {count}
      </p>
    </div>
  );
}
export default App;
