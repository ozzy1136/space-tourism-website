import styles from "./index.module.css";

import NavMenu from "../shared/NavMenu";

export default function NavExpanded() {
	return (
		<>
			<div className={`${styles.desktopHeaderLine}`}></div>
			<NavMenu
				classNames={{
					navWrapper: `${styles.wrapper}`,
					navList: `${styles.navList}`,
					navListItem: `${styles.navListItem}`,
					navLink: `${styles.navLink}`,
				}}
			/>
		</>
	);
}
