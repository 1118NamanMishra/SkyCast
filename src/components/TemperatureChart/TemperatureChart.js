// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import styled from 'styled-components';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const CenteredContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const TemperatureCard = styled.div`
//   padding: 2rem;
//   background: rgba(0, 0, 0, 0.7); /* Dark background */
//   backdrop-filter: blur(10px);
//   border-radius: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin: 2rem auto; /* Center the card horizontally */
//   color: #fff;
//   text-align: center;
//   width: 80%;
// `;

// const ChartContainer = styled.div`
//   position: relative;
//   height: 400px; /* Adjusted height for better visibility */
//   width: 100%;
//   margin: 0 auto; /* Center the chart horizontally */
// `;

// function TemperatureChart({ data }) {
//   const days = data.map(day => day.datetime);
//   const temperatures = data.map(day => (((day.temp - 32) * 5) / 9).toFixed(2));

//   const chartData = {
//     labels: days,
//     datasets: [
//       {
//         label: 'Temperature (°C)',
//         data: temperatures,
//         borderColor: 'skyblue', 
//         backgroundColor: 'blue', 
//         fill: true,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           color: '#fff',
//         },
//       },
//       title: {
//         display: true,
//         text: '15-Day Temperature Trend',
//         color: '#fff',
//         font: {
//           size: 18,
//           weight: 'bold',
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           color: 'rgba(255, 255, 255, 0.1)', 
//         },
//         ticks: {
//           color: '#fff', 
//           font: {
//             weight: 'bold', 
//           },
//         },
//       },
//       y: {
//         grid: {
//           color: 'rgba(255, 255, 255, 0.1)',
//         },
//         ticks: {
//           color: '#fff', 
//           font: {
//             weight: 'bold', 
//           },
//         },
//       },
//     },
//   };

//   return (
//     <CenteredContainer>
//       <TemperatureCard>
//         <h2 style={{ marginBottom: '1rem' }}>15-Day Temperature Trend</h2>
//         <ChartContainer>
//           <Line data={chartData} options={options} />
//         </ChartContainer>
//       </TemperatureCard>
//     </CenteredContainer>
//   );
// }

// export default TemperatureChart;
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const CenteredContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TemperatureCard = styled.div`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7); /* Dark background */
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem auto; /* Center the card horizontally */
  color: #fff;
  text-align: center;
  width: 100%; /* Increase width slightly for better visibility */
  max-width: 600px; /* Limit maximum width */
`;

const ChartContainer = styled.div`
  position: relative;
  height: 300px; /* Adjusted height for better visibility */
  width: 100%;
  margin: 3rem auto; /* Center the chart horizontally and provide space */
  transition: transform 0.3s ease; /* Smooth transition for rotation */
  transform-origin: center center; /* Rotate around the center */
  
  @media screen and (max-width: 720px) {
    transform: rotate(90deg); /* Rotate by 90 degrees for small screens */
    width: 80vh; /* Swap height and width for rotated view */
    height: 100vw;
    margin: calc((100vh - 200px) / 2) auto 3rem; /* Adjust margin to center and provide space */
    margin-left:-200px;

  }
`;

function TemperatureChart({ data }) {
  const days = data.map(day => day.datetime);
  const temperatures = data.map(day => (((day.temp - 32) * 5) / 9).toFixed(2));

  const chartData = {
    labels: days,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: 'skyblue', 
        backgroundColor: 'blue', 
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: '15-Day Temperature Trend',
        color: '#fff',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', 
        },
        ticks: {
          color: '#fff', 
          font: {
            weight: 'bold', 
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff', 
          font: {
            weight: 'bold', 
          },
        },
      },
    },
  };

  return (
    <CenteredContainer>
      <TemperatureCard>
        {/* <h2 style={{ marginBottom: '1rem', whiteSpace: 'nowrap' }}>15-Day Temperature Trend</h2> */}
        <ChartContainer>
          <Line data={chartData} options={options} />
        </ChartContainer>
      </TemperatureCard>
    </CenteredContainer>
  );
}

export default TemperatureChart;
