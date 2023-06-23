import styles from './Input.module.scss'

export default function Input({ value, type, onChange, maxLength }) {
    return (
        <input 
            className={styles.input}
            value={value}
            type={type}
            onChange={onChange}
            maxLength={maxLength}
        ></input>
    )
}