import logoImg from '../../assets/Logo.svg'

import { Container, Content } from './styles'

interface HeaderProps{
    onOpen:()=> void
}

export function Header({onOpen}:HeaderProps){
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtMoney" />
                <button
                 type="button"
                 onClick={onOpen}
                >
                    Nova Transação
                </button>

               
            </Content>
        </Container>
    )
}