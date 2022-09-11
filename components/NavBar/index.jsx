import styles from "./index.module.css";

import { useRef } from "react";
import Link from "next/link";
import { A11yDialog } from "react-a11y-dialog";
import IconHamburger from "./icon-hamburger.svg";
import IconClose from "./icon-close.svg";

export default function NavBar() {
	const dialog = useRef();

	return (
		<div className={`l-center-children ${styles.wrapper}`}>
			<button
				className={`l-center-children ${styles.hamburgerToggle} ${styles.hamburgerToggleOpen}`}
				type="button"
				onClick={() => dialog.current.show()}
			>
				<IconHamburger />
			</button>
			{/* TODO make dialog close when inner link clicked */}
			<A11yDialog
				classNames={{
					container: styles.hamburgerWrapper,
					overlay: styles.hamburgerOverlay,
					dialog: styles.hamburgerDialog,
					title: styles.hamburgerTitle,
					closeButton: `l-center-children ${styles.hamburgerToggle} ${styles.hamburgerToggleClose}`,
				}}
				id="site-navigation"
				title="Site Navigation"
				dialogRef={(instance) => (dialog.current = instance)}
				closeButtonContent={<IconClose />}
			>
				<nav>
					<ol className={styles.navList}>
						<li className={`text-nav ${styles.navListItem}`}>
							<Link href="/">
								<a onClick={() => dialog.current.hide()}>
									Home
								</a>
							</Link>
						</li>
						<li className={`text-nav ${styles.navListItem}`}>
							<Link href="/destination">
								<a onClick={() => dialog.current.hide()}>
									Destination
								</a>
							</Link>
						</li>
						<li className={`text-nav ${styles.navListItem}`}>
							<Link href="/crew">
								<a onClick={() => dialog.current.hide()}>
									Crew
								</a>
							</Link>
						</li>
						<li className={`text-nav ${styles.navListItem}`}>
							<Link href="/technology">
								<a onClick={() => dialog.current.hide()}>
									Technology
								</a>
							</Link>
						</li>
					</ol>
				</nav>
			</A11yDialog>
		</div>
	);
}
