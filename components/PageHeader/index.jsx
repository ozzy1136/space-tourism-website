import styles from "./index.module.css";

import Logo from "../shared/logo.svg";
import NavBar from "../NavBar";

export default function PageHeader() {
	return (
		<header className={`l-section-wrapper ${styles.wrapper}`}>
			<div className={`l-center-children ${styles.logoWrapper}`}>
				<Logo />
			</div>
			<NavBar />
		</header>
	);
}
