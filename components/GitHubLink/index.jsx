import styles from "./index.module.css";

import GitHubLogo from "./github-mark.svg";

export default function GitHubLink() {
	return (
		<a
			className={styles.wrapper}
			href="https://github.com/ozzy1136/space-tourism-website"
		>
			<span>View on GitHub</span>
			<GitHubLogo className={styles.linkLogo} />
		</a>
	);
}
