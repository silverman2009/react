import { useState } from 'react'
import Chart from "react-apexcharts";

const LineChart = () => {
    const [option, setOption] = useState({
        chart: {
          width : '90%',
          height: '80%',
          type: 'line',
          zoom: {
            enabled: true,
          }
        },
        dataLabels: {
          enabled: false
        },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: ["#a00"],
            width: 2,
            dashArray: 10,      
          },
        title: {
          text: 'نمودار فروشگاه عبدی',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      })
    const [series, setSeries] = useState([{
        name: "نقطه",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }])
  return (
    <div>
      <Chart options={option}
                series={series}
                type="line"
                />
    </div>
  );
}

export default LineChart;
