import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

export function Header(){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtMoney" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}