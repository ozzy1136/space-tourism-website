import styles from "./index.module.css";

import fs from "fs/promises";
import path from "path";
import DestinationTabs from "components/DestinationTabs";

/**
 * @param {object} props
 * @param {{name: string, images: {png: string, webp: string}, description: string, distance: string, travel: string}[]} props.destinationsData
 */
export default function Destination({ destinationsData }) {
	const tabsHeadingId = "destination-tabs";

	return (
		<>
			<main className={`page-section-container ${styles.wrapper}`}>
				<div className={styles.headingWrapper}>
					<span
						className={`text-subheading2 ${styles.headingNumber}`}
					>
						01
					</span>
					<h1
						className={`text-subheading2 ${styles.heading}`}
						id={tabsHeadingId}
					>
						Pick your destination
					</h1>
				</div>
				<DestinationTabs
					tabsHeadingId={tabsHeadingId}
					data={destinationsData}
				/>
			</main>
			<picture>
				<source
					srcSet="/assets/destination/background-destination-desktop.jpg"
					type="image/jpeg"
					media="(min-width: 1024px)"
				/>
				<source
					srcSet="/assets/destination/background-destination-tablet.jpg"
					type="image/jpeg"
					media="(min-width: 768px)"
				/>
				<img
					className="page-bg"
					src="/assets/destination/background-destination-mobile.jpg"
					role="presentation"
				/>
			</picture>
		</>
	);
}

export async function getStaticProps() {
	const dataFilePath = path.join(process.cwd(), "data.json");
	let data = await fs.readFile(dataFilePath);
	let content = JSON.parse(data);

	return {
		props: { destinationsData: content.destinations },
	};
}
