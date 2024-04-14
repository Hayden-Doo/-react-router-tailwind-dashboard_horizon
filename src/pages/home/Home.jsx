import Logo from '../../components/common/Logo';
import { Heading, Button, Stack, HStack, VStack } from '@chakra-ui/react';

function Home() {
  return (
    <div>
      <Heading as={'h3'} fontSize={30}>
        홈 화면
      </Heading>
      {/* <Stack direction={['column', null, null, 'row']}> */}
      <Stack direction={{ base: 'column', lg: 'row' }}>
        <Button variant={'icon'} colorScheme="blue">
          dddd
        </Button>
        <Button colorScheme="blue" border={'1px solid #000'} borderRadius={0}>
          Button
        </Button>
        <Button colorScheme="blue" variant="outline">
          Button
        </Button>
        <Button colorScheme="blue" variant="ghost">
          Button
        </Button>
        <Button colorScheme="blue" variant="link">
          Button
        </Button>
      </Stack>
    </div>
  );
}

export default Home;
