import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro';
import Table from '../components/Table';
import Footer from '../components/Footer';
import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #16151C;
    min-height: 100vh;
    gap: 1vh;
    padding: 10vh 0;
		color: #E7E7E7;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>FutbolTabol</title>
        <meta name="description" content="Check the live standing of football leagues around the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Intro/>
        <Table/>
        <Footer/>
      </Wrapper>
    </>
  )
}
