import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Juan Cruz Montiel - Awesome Portfolio</title>
                <meta
                name="description"
                content="My awesome portfolio, made with node, next.js
                and passion H)"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}