import Head from 'next/head'
import { useEffect, useState } from 'react';
import Link from '../src/components/Link';

// Conteúdo que deve ser carregado ao ser iniciado
export async function getStaticProps() {

    // É apenas rodado no build, ou seja, rodado uma vez quando for criado 
    const url = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'

    const faq = await fetch(url)
        .then((res) => res.json())
        .then((res) => res)
    // const faq = await acesso.json()

    return {
        props: {
            faq,
        },
    };

}
// export async function getServerSideProps()
// Já o getServerSideProps roda a cada acesso que se tem na página, gerando os elementos da mesma forma que o getStaticProps, porém em cada acesso

export default function FAQPage({ faq }) {

    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases Campanha</title>
            </Head>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>
            <ul>
                {faq.map(({answer, question}) => 
                <li key={question}>
                    <h2>{question}</h2>
                    <p>{answer}</p>
                </li>)}
            </ul>
        </div>
    )
}