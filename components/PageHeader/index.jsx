import styles from "./index.module.css";

import Logo from "../shared/logo.svg";
import NavBar from "../shared/NavBar";

export default function PageHeader() {
	return (
		<header className={styles.wrapper}>
			<Logo />
			<NavBar />
		</header>
	);
}
