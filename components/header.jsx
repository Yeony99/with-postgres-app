import styles from "../styles/header.module.css";

const HeaderBar = ({children}) => {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}

export default HeaderBar;