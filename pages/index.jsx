import styles from "./index.module.css";

import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className={`page-section-container ${styles.wrapper}`}>
				<div className={styles.headingWrapper}>
					<h1 className={`text-xxxxl ${styles.heading}`}>
						<span
							className="text-lg"
							style={{ display: "inline-block" }}
						>
							So, you want to travel to{" "}
						</span>
						<br />
						Space
					</h1>
				</div>
				<div className={`center-children ${styles.descriptionWrapper}`}>
					<p className={styles.description}>
						Let&#8217;s face it; if you want to go to space, you
						might as well genuinely go to outer space and not hover
						kind of on the edge of it. Well sit back, and relax
						because we&#8217;ll give you a truly out of this world
						experience!
					</p>
				</div>
				<div className={`center-children ${styles.ctaWrapper}`}>
					<Link href="/destination">
						<a className={`text-xl ${styles.cta}`}>Explore</a>
					</Link>
				</div>
			</main>
			<picture>
				<source
					srcSet="/assets/home/background-home-desktop.jpg"
					type="image/jpeg"
					media="(min-width: 1024px)"
				/>
				<source
					srcSet="/assets/home/background-home-tablet.jpg"
					type="image/jpeg"
					media="(min-width: 768px)"
				/>
				<img
					className="page-bg"
					src="/assets/home/background-home-mobile.jpg"
					alt=""
				/>
			</picture>
		</>
	);
}
