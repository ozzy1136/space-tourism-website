import styles from "./index.module.css";

import Logo from "components/shared/logo.svg";
import NavHamburger from "components/layout/NavHamburger";
import NavExpanded from "components/layout/NavExpanded";

export default function PageHeader() {
	return (
		<header className={`page-section-container ${styles.wrapper}`}>
			<div className={styles.logoWrapper}>
				<Logo className={styles.logoSVG} />
			</div>
			<NavHamburger />
			<NavExpanded />
		</header>
	);
}
