import MiniSt from '../../components/card/MiniSt';
import { Card, SimpleGrid } from '@chakra-ui/react';
import miniStData from '../../data/miniStData';
import ComplexTable from './components/ComplexTable';
import LineChart from '../../components/charts/LineChart';
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from '../../variables/charts';
import { useEffect, useState } from 'react';

function Home() {
  const [color, setColor] = useState('yellow');

  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = 'white';
    };
  }, [color]);

  const changeColor = () => {
    setColor((prevColor) => (prevColor === 'yellow' ? 'red' : 'yellow'));
  };

  return (
    <div>
      <button onClick={changeColor}>색상 변경</button>
      <Card>
        <LineChart
          chartData={lineChartDataTotalSpent}
          chartOptions={lineChartOptionsTotalSpent}
        />
      </Card>
      {/* Complex Table */}
      <ComplexTable />
      {/* <SlideMain /> */}
      <SimpleGrid columns={[1, null, 2, 3, 6]} spacing={10}>
        {miniStData.map((data, index) => (
          <MiniSt key={index} {...data} />
        ))}
      </SimpleGrid>
      {/* <Stack direction={['column', null, null, 'row']}> */}
    </div>
  );
}

export default Home;
