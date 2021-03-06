import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Test: NextPage = () => {
    const [methodEducation, setMethodEducation] = useState('');
    const handleChange=async (e: { target: { value: any } })=>{
        await setMethodEducation(e.target.value);
        await console.log(methodEducation)
    }
    return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Выберите форму обучения
            </h1>
            <div className={styles.grid}>
            <form>
                <div>
                <a className={styles.card}>
                <input type="radio" value="ОЧНОЕ" id="method_education"
                onChange={handleChange} name="method_education" />
                <label>ОЧНОЕ</label>
                </a>
                <a className={styles.card}>
                <input type="radio" value="ЗАОЧНОЕ" id="method_education"
                onChange={handleChange} name="method_education"/>
                <label>ЗАОЧНОЕ</label>
                </a>
                </div>
                <div><p>Вы выбрали способ обучения --{'>'} {methodEducation}</p>  </div>
            </form>
            </div>
        </main>

        <footer className={styles.footer}>
            Приемная комиссия КГБ ПОУ ХКОТСО
        </footer>
        </div>
    )
}

export default Test
