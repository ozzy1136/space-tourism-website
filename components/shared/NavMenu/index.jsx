import styles from "./index.module.css";

import { useRouter } from "next/router";
import Link from "next/link";
import filterClassNames from "utils/filterClassNames";

const navLinksData = [
	{ targetHref: "/", targetTitle: "Home" },
	{ targetHref: "/destination", targetTitle: "Destination" },
	{ targetHref: "/crew", targetTitle: "Crew" },
	{ targetHref: "/technology", targetTitle: "Technology" },
];

export default function NavMenu({ classNames, dialogRef }) {
	const router = useRouter();

	return (
		<nav className={classNames.navWrapper}>
			<ol className={classNames.navList}>
				{navLinksData.map(({ targetHref, targetTitle }, i) => (
					<li className={classNames.navListItem} key={i}>
						<Link href={targetHref}>
							<a
								className={filterClassNames([
									"text-nav",
									styles.navLink,
									classNames.navLink,
								])}
								onClick={
									dialogRef
										? () => dialogRef.current.hide()
										: undefined
								}
								aria-current={
									router.pathname === targetHref
										? "page"
										: false
								}
							>
								{targetTitle}
							</a>
						</Link>
					</li>
				))}
			</ol>
		</nav>
	);
}
