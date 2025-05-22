import Image from 'next/image';
import styles from '../styles/Button.module.css';

export default function Button( { text, onClick}) {
    return (
        <div className={styles.container}>
        <button className={styles.button} 
        onClick={onClick} 
        prefetch={true}
        > {text}
         </button>
        </div>
    )
};