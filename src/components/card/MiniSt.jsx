import { Card, CardBody, Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'

function MiniSt({ name, value, growth, startIcon, endIcon }) {
    return (
        <Card>
            <CardBody display={'flex'} alignItems={'center'}>
                {startIcon}
                <Stat ml={startIcon ? 3 : 0} mr={endIcon ? 3 : 0}>
                    <StatLabel>{name}</StatLabel>
                    <StatNumber>{value}</StatNumber>
                    {growth ? <StatHelpText>{growth}</StatHelpText> : null}
                </Stat>
                {endIcon}
            </CardBody>
        </Card>
    )
}

export default MiniSt
