import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import outcomeImg from "../../assets/outcome.svg" 
import incomeImg from "../../assets/income.svg"
import totalImg from "../../assets/Total.svg"

import { Container } from "./styles";

export function Summary(){

    const data = useContext(TransactionsContext)

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div >
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$500,00</strong>
            </div>
            </Container>
    )
}