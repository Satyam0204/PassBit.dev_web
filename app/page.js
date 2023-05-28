import styles from './page.module.css'
import Dashboard from './home/page'

export default function Home() {
  return (
    <main className={styles.main}>
     <Dashboard/>
    </main>
  )
}
