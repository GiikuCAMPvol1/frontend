import styles from './GameMainStyles/CodeEditor.module.css'

export default function Home() {
  return (
    <div className={styles.CodeEditor}>
      <textarea className={styles.textarea}></textarea>
    </div>
  )
}
