import React from 'react';
import Head from 'next/head'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Maps from '../components/Maps'
export default function Home() {
    return (
        <div>


            <Nav></Nav>

            <Maps></Maps>

            <Footer></Footer>

        </div>
    )
}