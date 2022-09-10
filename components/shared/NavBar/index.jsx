import styles from "./index.module.css";

import Link from "next/link";
import IconClose from "../icon-close.svg";

export default function NavBar() {
	return (
		<div className={styles.wrapper}>
			<button
				className={styles.buttonClose}
				type="button"
				id="openNavMenu"
				tabIndex="-1"
			>
				<IconClose />
			</button>
			<nav className={styles.navMenu}>
				<ol className={styles.navList}>
					<li className={`text-nav ${styles.navListItem}`}>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li className={`text-nav ${styles.navListItem}`}>
						<Link href="/destination">
							<a>Destination</a>
						</Link>
					</li>
					<li className={`text-nav ${styles.navListItem}`}>
						<Link href="/crew">
							<a>Crew</a>
						</Link>
					</li>
					<li className={`text-nav ${styles.navListItem}`}>
						<Link href="/technology">
							<a>Technology</a>
						</Link>
					</li>
				</ol>
			</nav>
		</div>
	);
}
