```jsx
import { Box, Heading, Text, VStack, IconButton, useToast, Progress, Flex, Table, Thead, Tbody, Tr, Th, Td, HStack, Spacer } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";
import { useState } from "react";
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, PointElement, LineElement } from 'chart.js';
import HeatMap from '@uiw/react-heat-map';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, PointElement, LineElement);

const Dashboard = () => {
  const [recording, setRecording] = useState(false);
  const toast = useToast();

  const handleRecord = () => {
    setRecording(!recording);
    toast({
      title: recording ? "Recording stopped" : "Recording started",
      status: recording ? "warning" : "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const data = {
    labels: ['Topic A', 'Topic B', 'Topic C', 'Topic D', 'Topic E'],
    datasets: [
      {
        label: 'Voice Clips',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.raw;
            return label;
          },
        },
      },
    },
  };

  const heatmapData = [
    { date: '2016/01/11', count: 2 },
    { date: '2016/01/12', count: 20 },
    { date: '2016/01/13', count: 10 },
    ...Array.from({ length: 17 }, (_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx })),
    { date: '2016/04/11', count: 2 },
    { date: '2016/05/01', count: 5 },
    { date: '2016/05/02', count: 5 },
    { date: '2016/05/04', count: 11 },
    { date: '2016/06/01', count: 8 },
    { date: '2016/06/02', count: 15 },
    { date: '2016/06/03', count: 12 },
    { date: '2016/06/04', count: 7 },
    { date: '2016/06/05', count: 9 },
    { date: '2016/06/06', count: 14 },
    { date: '2016/06/07', count: 6 },
    { date: '2016/06/08', count: 10 },
    { date: '2016/06/09', count: 13 },
    { date: '2016/06/10', count: 4 },
    { date: '2016/06/11', count: 11 },
    { date: '2016/06/12', count: 3 },
    { date: '2016/06/13', count: 16 },
    { date: '2016/06/14', count: 5 },
    { date: '2016/06/15', count: 18 },
    { date: '2016/06/16', count: 2 },
    { date: '2016/06/17', count: 20 },
    { date: '2016/06/18', count: 1 },
    { date: '2016/06/19', count: 17 },
    { date: '2016/06/20', count: 19 },
    { date: '2016/06/21', count: 3 },
    { date: '2016/06/22', count: 8 },
    { date: '2016/06/23', count: 12 },
    { date: '2016/06/24', count: 7 },
    { date: '2016/06/25', count: 9 },
    { date: '2016/06/26', count: 14 },
    { date: '2016/06/27', count: 6 },
    { date: '2016/06/28', count: 10 },
    { date: '2016/06/29', count: 13 },
    { date: '2016/06/30', count: 4 },
    { date: '2016/07/01', count: 11 },
    { date: '2016/07/02', count: 3 },
    { date: '2016/07/03', count: 16 },
    { date: '2016/07/04', count: 5 },
    { date: '2016/07/05', count: 18 },
    { date: '2016/07/06', count: 2 },
    { date: '2016/07/07', count: 20 },
    { date: '2016/07/08', count: 1 },
    { date: '2016/07/09', count: 17 },
    { date: '2016/07/10', count: 19 },
    { date: '2016/07/11', count: 3 },
    { date: '2016/07/12', count: 8 },
    { date: '2016/07/13', count: 12 },
    { date: '2016/07/14', count: 7 },
    { date: '2016/07/15', count: 9 },
    { date: '2016/07/16', count: 14 },
    { date: '2016/07/17', count: 6 },
    { date: '2016/07/18', count: 10 },
    { date: '2016/07/19', count: 13 },
    { date: '2016/07/20', count: 4 },
    { date: '2016/07/21', count: 11 },
    { date: '2016/07/22', count: 3 },
    { date: '2016/07/23', count: 16 },
    { date: '2016/07/24', count: 5 },
    { date: '2016/07/25', count: 18 },
    { date: '2016/07/26', count: 2 },
    { date: '2016/07/27', count: 20 },
    { date: '2016/07/28', count: 1 },
    { date: '2016/07/29', count: 17 },
    { date: '2016/07/30', count: 19 },
    { date: '2016/07/31', count: 3 },
    { date: '2016/08/01', count: 8 },
    { date: '2016/08/02', count: 12 },
    { date: '2016/08/03', count: 7 },
    { date: '2016/08/04', count: 9 },
    { date: '2016/08/05', count: 14 },
    { date: '2016/08/06', count: 6 },
    { date: '2016/08/07', count: 10 },
    { date: '2016/08/08', count: 13 },
    { date: '2016/08/09', count: 4 },
    { date: '2016/08/10', count: 11 },
    { date: '2016/08/11', count: 3 },
    { date: '2016/08/12', count: 16 },
    { date: '2016/08/13', count: 5 },
    { date: '2016/08/14', count: 18 },
    { date: '2016/08/15', count: 2 },
    { date: '2016/08/16', count: 20 },
    { date: '2016/08/17', count: 1 },
    { date: '2016/08/18', count: 17 },
    { date: '2016/08/19', count: 19 },
    { date: '2016/08/20', count: 3 },
    { date: '2016/08/21', count: 8 },
    { date: '2016/08/22', count: 12 },
    { date: '2016/08/23', count: 7 },
    { date: '2016/08/24', count: 9 },
    { date: '2016/08/25', count: 14 },
    { date: '2016/08/26', count: 6 },
    { date: '2016/08/27', count: 10 },
    { date: '2016/08/28', count: 13 },
    { date: '2016/08/29', count: 4 },
    { date: '2016/08/30', count: 11 },
    { date: '2016/08/31', count: 3 },
    { date: '2016/09/01', count: 16 },
    { date: '2016/09/02', count: 5 },
    { date: '2016/09/03', count: 18 },
    { date: '2016/09/04', count: 2 },
    { date: '2016/09/05', count: 20 },
    { date: '2016/09/06', count: 1 },
    { date: '2016/09/07', count: 17 },
    { date: '2016/09/08', count: 19 },
    { date: '2016/09/09', count: 3 },
    { date: '2016/09/10', count: 8 },
    { date: '2016/09/11', count: 12 },
    { date: '2016/