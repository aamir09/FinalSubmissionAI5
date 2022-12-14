import { React, useState, useEffect } from "react";
import "./Analytics.css";
import BarChart from "../BarChart";
// import Footer2 from '../Footer2'
import { useLocation } from "react-router-dom";
import axios from "axios";
import AnalyticsMeta from "../AnalyticsMeta";
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
function Analytics(props) {
  const location = useLocation();
  const [analytics_data, setDataAn] = useState({});
  const [loaded, setLoaded] = useState(false);

  console.log(location.state);

  const getData = async () => {
    const res = await axios({
      method: "post",
      url: `${BASE_API_URL}/results`,
      data: { filename: location.state },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res
  };

  useEffect(() => {
    setTimeout (() => {
    const blah = async () => {
      const res = await getData();
      setDataAn(res);
      setLoaded(true)
    };
    blah();

    
  }, 5000)}, []);

  console.log(analytics_data)
  console.log(loaded)

  if (loaded) {

    return (<AnalyticsMeta props = {analytics_data.data} />)
  }

}

export default Analytics;
