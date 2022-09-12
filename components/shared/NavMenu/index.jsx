import styles from "./index.module.css";

import Link from "next/link";

export default function NavMenu({ classNames, dialogRef }) {
	return (
		<nav className={classNames.navWrapper}>
			<ol className={classNames.navList}>
				<li className={`text-nav ${classNames.navListItem}`}>
					<Link href="/">
						<a
							className={`${styles.navLink} ${classNames.navLink}`}
							onClick={() => dialogRef.current.hide()}
						>
							Home
						</a>
					</Link>
				</li>
				<li className={`text-nav ${classNames.navListItem}`}>
					<Link href="/destination">
						<a
							className={`${styles.navLink} ${classNames.navLink}`}
							onClick={() => dialogRef.current.hide()}
						>
							Destination
						</a>
					</Link>
				</li>
				<li className={`text-nav ${classNames.navListItem}`}>
					<Link href="/crew">
						<a
							className={`${styles.navLink} ${classNames.navLink}`}
							onClick={() => dialogRef.current.hide()}
						>
							Crew
						</a>
					</Link>
				</li>
				<li className={`text-nav ${classNames.navListItem}`}>
					<Link href="/technology">
						<a
							className={`${styles.navLink} ${classNames.navLink}`}
							onClick={() => dialogRef.current.hide()}
						>
							Technology
						</a>
					</Link>
				</li>
			</ol>
		</nav>
	);
}
