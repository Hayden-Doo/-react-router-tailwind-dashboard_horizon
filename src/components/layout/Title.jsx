import { Heading } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

function Title() {
    const location = useLocation()

    // url 경로를 '/' 기준으로 나누어 배열로 반환한다.
    // home/about => ['home', 'about']
    // filter(Boolean)를 사용하여 빈 문자열을 제거한다.
    const pathArr = location.pathname.split('/').filter(Boolean)

    // 경로의 마지막 요소를 타이틀로 사용한다.
    // 만약 경로가 '/'이면 'Home'을 반환한다.
    const pageTitle = pathArr.length > 0 ? pathArr[pathArr.length - 1] : 'Home'

    // 첫 글자를 대문자로 변환한다.
    const title = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)

    return <Heading as={'h2'}>{title}</Heading>
}

export default Title
