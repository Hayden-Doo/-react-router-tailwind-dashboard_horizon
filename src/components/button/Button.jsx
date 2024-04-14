import styled from 'styled-components'

const Button = styled.button`
    background: ${(props) => (props.default ? props.theme.colors.primary : props.theme.colors.white)};
    color: ${(props) => (props.default ? props.theme.colors.white : props.theme.colors.black)};
    padding: 10px;
    border: 1px solid ${(props) => (props.default ? props.theme.colors.primary : props.theme.colors.black)};
`
// Button 컴포넌트를 상속 받아서 사용할 수 있습니다.
export const GhostButton = styled(Button)`
    background: none;
    border: none;
`

export default Button
