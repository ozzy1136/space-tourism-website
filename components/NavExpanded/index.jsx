import styles from "./index.module.css";

import NavMenu from "../shared/NavMenu";

export default function NavExpanded() {
	return (
		<NavMenu
			classNames={{
				navWrapper: `${styles.wrapper}`,
				navList: `${styles.navList}`,
			}}
		/>
	);
}
