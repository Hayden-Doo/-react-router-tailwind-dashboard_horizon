import { CloseIcon, InfoIcon, InfoOutlineIcon, MoonIcon } from '@chakra-ui/icons'
import IconBox from '../components/icon/IconBox'

const miniStData = [
    {
        name: '타이틀1',
        value: '$350.0',
        startIcon: <IconBox bg={'red.200'} borderRadius={'10px'} icon={<MoonIcon />} />,
    },
    {
        name: '타이틀2',
        value: '$660.0',
        startIcon: <IconBox bg={'blue.200'} borderRadius={'50%'} icon={<CloseIcon />} />,
    },
    {
        name: '타이틀3',
        value: '$770.0',
        growth: '15.34%',
    },
    {
        name: '타이틀4',
        value: '$990.0',
        endIcon: <InfoIcon />,
    },
    {
        name: '타이틀5',
        value: '$220.0',
        startIcon: <InfoOutlineIcon />,
    },
    {
        name: '타이틀6',
        value: '$880.0',
        startIcon: <MoonIcon />,
    },
]

export default miniStData
