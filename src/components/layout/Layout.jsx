import { Outlet } from 'react-router-dom';
import Header from './Header';
import Logo from '../common/Logo';
import { Flex, Box } from '@chakra-ui/react';
import Title from './Title';

function Layout() {
  return (
    <>
      <Flex minH={'100vh'}>
        <Header />
        <Box id="main" flex={1} p={5}>
          <Title />
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}

export function LayoutType2() {
  return (
    <>
      <Logo />
      <Outlet />
    </>
  );
}

export default Layout;
