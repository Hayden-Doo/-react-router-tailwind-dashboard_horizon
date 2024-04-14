import MiniSt from '../../components/card/MiniSt';
import { Card, SimpleGrid } from '@chakra-ui/react';
import miniStData from '../../data/miniStData';
import ComplexTable from './components/ComplexTable';
import LineChart from '../../components/charts/LineChart';
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from '../../variables/charts';

function Home() {
  return (
    <div>
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
