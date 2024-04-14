import { Box, Center } from '@chakra-ui/react'

function IconBox({ icon, ...rest }) {
    return (
        <Center w={30} h={30} {...rest}>
            {icon}
        </Center>
    )
}

export default IconBox
