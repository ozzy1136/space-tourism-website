import styles from "./index.module.css";

import { useRouter } from "next/router";
import Link from "next/link";

export default function NavMenu({ classNames, dialogRef }) {
	const router = useRouter();

	return (
		<nav className={classNames.navWrapper}>
			<ol className={classNames.navList}>
				<li className={`${classNames.navListItem}`}>
					<Link href="/">
						<a
							className={`text-nav ${styles.navLink} ${
								classNames.navLink ? classNames.navLink : ""
							}`}
							onClick={() =>
								dialogRef && dialogRef.current.hide()
							}
							aria-current={
								router.pathname === "/" ? "page" : false
							}
						>
							Home
						</a>
					</Link>
				</li>
				<li className={`${classNames.navListItem}`}>
					<Link href="/destination">
						<a
							className={`text-nav ${styles.navLink} ${
								classNames.navLink ? classNames.navLink : ""
							}`}
							onClick={() =>
								dialogRef && dialogRef.current.hide()
							}
							aria-current={
								router.pathname.startsWith("/destination")
									? "page"
									: false
							}
						>
							Destination
						</a>
					</Link>
				</li>
				<li className={`${classNames.navListItem}`}>
					<Link href="/crew">
						<a
							className={`text-nav ${styles.navLink} ${
								classNames.navLink ? classNames.navLink : ""
							}`}
							onClick={() =>
								dialogRef && dialogRef.current.hide()
							}
							aria-current={
								router.pathname.startsWith("/crew")
									? "page"
									: false
							}
						>
							Crew
						</a>
					</Link>
				</li>
				<li className={`${classNames.navListItem}`}>
					<Link href="/technology">
						<a
							className={`text-nav ${styles.navLink} ${
								classNames.navLink ? classNames.navLink : ""
							}`}
							onClick={() =>
								dialogRef && dialogRef.current.hide()
							}
							aria-current={
								router.pathname.startsWith("/technology")
									? "page"
									: false
							}
						>
							Technology
						</a>
					</Link>
				</li>
			</ol>
		</nav>
	);
}
