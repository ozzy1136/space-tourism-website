import styles from "./index.module.css";

import Logo from "../../shared/logo.svg";
import NavHamburger from "../NavHamburger";
import NavExpanded from "../NavExpanded";

export default function PageHeader() {
	return (
		<header className={`page-section-container ${styles.wrapper}`}>
			<div className={`${styles.logoWrapper}`}>
				<Logo className={`${styles.logoSVG}`} />
			</div>
			<NavHamburger />
			<NavExpanded />
		</header>
	);
}
