import {useState} from "react"
import Chart from "react-apexcharts";

const PieChart = () => {
    const [option, setOption] = useState({
        chart: {
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
          fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "diagonal1",
            shadeIntensity: 0.5,
            gradientToColors: ['yellow'], // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: [0.2, 0.8],
            opacityTo: 1,
            stops: [0,100],
            colorStops: []
          }
        },
        colors: ["#00FF00","#009"],
         dataLabels: {
          enabled: true,
          style: {
            colors: ['#000']
          },
          background: {
            enabled: true,
            foreColor: '#e91',
            borderWidth: 1
          }
        },
        labels: ["کل کاربران","کاربران fdgfdgfdggfdgfdgfdgfdgdfgfdgfdgfgfdgdfgdfgfdgdfg"],
        responsive: [{
          breakpoint: 200,
        }],
        
      })
    const [series, setSeries] = useState([70,30])
  return (
    <div>
    <Chart
        options={option}
        series={series}
        type="donut"
    />
</div>
  );
}

export default PieChart;
