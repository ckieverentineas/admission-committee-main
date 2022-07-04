import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Abiturs from './component/abiturs'

const Admin: NextPage = () => {
    const [methodEducation, setMethodEducation] = useState('');
    const [specialization_first, setSpecializationFirst] = useState('')
    const handleChange=async (e: { target: { value: any } })=>{
        await setMethodEducation(e.target.value);
        await console.log(methodEducation)
    }
    async function Admin() {
        document.location.href= await "/"
    }
    const ahandleSubmit = () => {
        const val = document.getElementById('filtersos')?.value
        const valoch = document.getElementById('filtersosoch')?.value
        setSpecializationFirst(val + "_"+valoch)
        CreateEX(val, valoch)
    }
    const ahandleSubmitmod = () => {
        const val = document.getElementById('filtersosmod')?.value
        const valoch = document.getElementById('filtersosochmod')?.value
        const valcat = document.getElementById('filtersoscatmod')?.value
        setSpecializationFirst(val + "_"+valoch + "_" + valcat)
        CreateEXmod(val, valoch, valcat)
    }
    async function CreateEX(val: any, valoch: any) {
        // GET request using fetch with async/await
        const response = await fetch('/api/xlsx', {
            body: JSON.stringify({specialization_first: val, form_education: valoch}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const datas = await response.json();
        console.log(datas)
        console.log(specialization_first)
    }
    async function CreateEXmod(val: any, valoch: any, valcat: any) {
        // GET request using fetch with async/await
        const response = await fetch('/api/xlsxmod', {
            body: JSON.stringify({specialization_first: val, form_education: valoch, education_complete_category: valcat}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const datas = await response.json();
        console.log(datas)
        console.log(specialization_first)
    }
    async function GenAll() {
        // GET request using fetch with async/await
        const response = await fetch('/api/xlsxall', {
            body: JSON.stringify({status: 'request'}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const datas = await response.json();
        console.log(datas)
    }
    return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <h1 className={styles.title}>
            Личный кабинет администратора
            </h1><br/>
            <label className={styles.label}>Специальность:</label> 
                        <select name="specialization_first" id="filtersos" onChange={ahandleSubmit}>
                            <option value='Компьютерные системы и комплексы'>Компьютерные системы и комплексы</option>
                            <option value='Монтаж и эксплуатация оборудования и систем газоснабжения'>Монтаж и эксплуатация оборудования и систем газоснабжения</option>
                            <option value='Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий'>Монтаж, наладка и эксплуатация электрооборудования промышленных и гражданских зданий</option>
                            <option value='Информационные системы и программирование'>Информационные системы и программирование</option>
                            <option value='Почтовая связь'>Почтовая связь</option>
                            <option value='Теплоснабжение и теплотехническое оборудование'>Теплоснабжение и теплотехническое оборудование</option>
                            <option value='Технология аналитического контроля химических соединений'>Технология аналитического контроля химических соединений</option>
                            <option value='Право и организация социального обеспечения'>Право и организация социального обеспечения</option>
                            <option value='Экономика и бухгалтерский учет (по отраслям)'>Экономика и бухгалтерский учет (по отраслям)</option>
                            <option value='Электромонтажник электрических сетей и электрооборудования'>Электромонтажник электрических сетей и электрооборудования</option>
                            <option value='Электромонтер по техническому обслуживанию электростанций и сетей'>Электромонтер по техническому обслуживанию электростанций и сетей</option>
                            <option value='Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)'>Электромонтер по ремонту и обслуживанию электрооборудования (по отраслям)</option>
                            <option value='Оператор нефтепереработки'>Оператор нефтепереработки</option>
                            <option value='Продавец, контролёр-кассир'>Продавец, контролёр-кассир</option>
                            <option value='Мастер контрольно-измерительных приборов и автоматики'>Мастер контрольно-измерительных приборов и автоматики</option>
                            <option value='Лаборант-эколог'>Лаборант-эколог</option>
                            <option value='Наладчик компьютерных сетей'>Наладчик компьютерных сетей</option>
                        </select>
                        <label className={styles.label}>Форма обучения:</label> 
                        <select name="form_education" id="filtersosoch" onChange={ahandleSubmit}>
                            <option value='ЗАОЧНОЙ'>ЗАОЧНАЯ</option>
                            <option value='ОЧНОЙ'>ОЧНАЯ</option>
                        </select>
                            <a target="_blank" href={`./tables/${specialization_first}.xlsx`} download>
                                <Link href={`./tables/${specialization_first}.xlsx`} target="_blank">
                                <button>Скачать список группы</button></Link></a>
                                <a target="_blank" href={`./tables/full.xlsx`} download>
                                <Link href={`./tables/full.xlsx`} target="_blank">
                                <button onClick={GenAll}>Отчет по всем группам</button></Link></a>
            <button onClick={Admin}>На главную</button><br/>
            
            <label className={styles.label}>Специальность:</label> 
                        <select name="specialization_first" id="filtersosmod" onChange={ahandleSubmitmod}>
                            <option value='Право и организация социального обеспечения'>Право и организация социального обеспечения</option>
                            <option value='Экономика и бухгалтерский учет (по отраслям)'>Экономика и бухгалтерский учет (по отраслям)</option>
                        </select>
                        <label className={styles.label}>Форма обучения:</label> 
                        <select name="form_education" id="filtersosochmod" onChange={ahandleSubmitmod}>
                            <option value='ЗАОЧНОЙ'>ЗАОЧНАЯ</option>
                            <option value='ОЧНОЙ'>ОЧНАЯ</option>
                        </select>
                        <label className={styles.label}>Образование:</label> 
                        <select name="education_complete_category" id="filtersoscatmod" onChange={ahandleSubmitmod}>
                            <option value='СРЕДНЕЕ ОБЩЕЕ'>СРЕДНЕЕ ОБЩЕЕ - 11 КЛАССОВ</option>
                            <option value='ОСНОВНОЕ ОБЩЕЕ'>ОСНОВНОЕ ОБЩЕЕ - 9 КЛАССОВ</option>
                        </select>
                            <a target="_blank" href={`./tables/${specialization_first}.xlsx`} download>
                                <Link href={`./tables/${specialization_first}.xlsx`} target="_blank">
                                <button>Скачать список группы</button></Link></a>
            <div className={styles.grid}>
            <div className={styles.card}>
                <Abiturs/>
            </div>
            </div>
        </main>

        <footer className={styles.footer}>
        <div className={styles.code} onClick={Admin}>Приемная комиссия КГБ ПОУ ХКОТСО 2022</div>
        </footer>
        </div>
    )
}

export default Admin
