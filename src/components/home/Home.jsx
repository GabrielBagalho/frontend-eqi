import React from 'react'
import Main from '../template/Main'


export default props =>
    <Main icon="home" title="EQI Investimentos"
        subtitle="Olá, use à vontade, feito para você! ">
        <hr />
       
        <p id="text"><strong>Esse simulador é para você comparar e decidir como insvetir melhor o seu dinheiro.</strong></p>
        
        <div className="contents-cdi">
        
        <strong id="title-cdi">Taxa CDI : </strong>
        <p id="text-cdi"> O CDI é um dos principais índices do mercado financeiro. Ele indica, na maioria das vezes, o rendimento de diversos investimentos e varia mês a mês. Quando falamos do CDI 2020, portanto, estamos falando do CDI acumulado ao longo deste ano, somando os resultados que ele apresenta em cada mês. </p>
        </div>
        
        <div className="contents-saving">

        <strong id="title-saving">Taxa Poupança: </strong>
        <p id="saving-text">Muita gente não considera que a poupança seja um investimento de fato. Mas na prática, ela normalmente é o primeiro contato da maioria das pessoas com as aplicações disponíveis no mercado financeiro. Cerca de 67 milhões de brasileiros têm pelo menos. A poupança é uma aplicação de renda fixa simples. Vale destacar que a rentabilidade da poupança é a mesma em qualquer instituição. Portanto, a escolha do banco não vai influenciar no retorno do investimento.</p>

        </div>
    </Main>

        