import { Link, useLocation } from 'react-router-dom'
import Button, { GhostButton } from '../button/Button'
import tw from 'twin.macro'
import styled from 'styled-components'
import Gnb from './Gnb'

function Header() {
    return (
        <header className="flex-col items-center justify-between hidden gap-8 p-5 bg-gray-300 border-2 border-gray-600 md:flex">
            <h1 className="text-3xl font-bold text-secondary">logo</h1>
            <Gnb />
            <Util>
                <Button default>마이페이지</Button>
                <Button>마이페이지</Button>
            </Util>
        </header>
    )
}

const Util = styled.div`
    ${tw`hidden md:block`}
`

// const Gnb = styled.nav`
//     ul {
//         ${tw`flex flex-col gap-6`}
//     }
// `

export default Header
