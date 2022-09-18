import styles from "./index.module.css";

import { useRef, useEffect } from "react";
import { A11yDialog } from "react-a11y-dialog";
import NavMenu from "components/shared/NavMenu";
import IconHamburger from "./icon-hamburger.svg";
import IconClose from "./icon-close.svg";

export default function NavBar() {
	const dialog = useRef();

	function addBodyNoScroll() {
		document.body.classList.toggle("no-scroll", true);
	}

	function removeBodyNoScroll() {
		document.body.classList.toggle("no-scroll", false);
	}

	useEffect(() => {
		if (dialog.current) {
			dialog.current.on("show", addBodyNoScroll);
			dialog.current.on("hide", removeBodyNoScroll);
		}

		return () => {
			if (dialog.current) {
				dialog.current.off("show", addBodyNoScroll);
				dialog.current.off("hide", removeBodyNoScroll);
			}
		};
	}, [dialog]);

	return (
		<>
			<button
				className={`${styles.hamburgerToggle} ${styles.hamburgerToggleOpen}`}
				type="button"
				aria-label="Open site navigation menu"
				onClick={() => dialog.current.show()}
			>
				<IconHamburger />
			</button>
			<A11yDialog
				classNames={{
					container: styles.hamburgerWrapper,
					overlay: styles.hamburgerOverlay,
					dialog: styles.hamburgerDialog,
					title: "sr-only",
					closeButton: `center-children ${styles.hamburgerToggle} ${styles.hamburgerToggleClose}`,
				}}
				id="site-navigation"
				title="Site Navigation"
				dialogRef={(instance) => (dialog.current = instance)}
				closeButtonContent={<IconClose />}
				closeButtonLabel="Close site navigation menu"
			>
				<NavMenu
					classNames={{
						navList: styles.navList,
						navListItem: styles.navListItem,
						navLink: styles.navLink,
					}}
					dialogRef={dialog}
				/>
			</A11yDialog>
		</>
	);
}
