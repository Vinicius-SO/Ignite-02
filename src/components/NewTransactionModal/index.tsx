import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container,TransactionTypeContainer  } from '../NewTransactionModal/styles'
import closeImg from '../../assets/Vector.svg'

interface NewTransactionModalProps{
    isOpen:boolean
    onRequestClose: () => void
}

export const NewTransactionModal = ({isOpen,onRequestClose}:NewTransactionModalProps)=>{
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type='button' onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar Modal" />
        </button>
        <Container>
            <h2>Cadastrar Transação</h2>
            <input type="text" placeholder='Título'/>
            <input type="number" placeholder='Valor' />
            <input type="text" placeholder='Categoria'/>
            <TransactionTypeContainer>
                <button type='button'>
                    <img src={incomeImg} alt="Entrada" />
                    <span>Saída</span>
                </button>
                <button type='button'>
                    <img src={outcomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </button>
                
            </TransactionTypeContainer>

            <button type="submit">Cadastrar</button>

        </Container>
      </Modal>
    )
}