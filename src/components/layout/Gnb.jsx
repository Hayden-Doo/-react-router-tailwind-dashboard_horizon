import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { AddIcon, LinkIcon, RepeatIcon } from '@chakra-ui/icons';

function Gnb() {
  const navArr = [
    { name: 'Home', path: '/', icon: <RepeatIcon /> },
    { name: 'About', path: '/about', icon: <AddIcon /> },
    { name: 'Login', path: '/login', icon: <LinkIcon /> },
    { name: 'Todo', path: '/todo', icon: <RepeatIcon /> },
  ];

  // 현재 페이지의 경로를 가져온다.
  const location = useLocation();

  return (
    <nav>
      <ul>
        {navArr.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              as={ReactRouterLink}
              sx={{
                color: location.pathname === item.path ? 'primary' : 'inherit',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                '&::before': {
                  content: `""`,
                },
                '&:hover': {
                  color: 'red',
                },
              }}
            >
              {item.icon} {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Gnb;
