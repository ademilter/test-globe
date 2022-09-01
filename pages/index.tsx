import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import styles from '../styles/Home.module.css'

const AnimatedGlobe = dynamic(() => import("../components/globe"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AnimatedGlobe/>
    </div>
  )
}

export default Home
