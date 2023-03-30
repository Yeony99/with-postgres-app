import styles from "../styles/header.module.css";

const HeaderBar = ({children}) => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}

export default HeaderBar;