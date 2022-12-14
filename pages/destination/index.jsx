import styles from "./index.module.css";

import fs from "fs/promises";
import path from "path";
import Tabs from "components/shared/Tabs";
import DestinationTab from "components/DestinationTab";

export default function Destination({ destinationsData }) {
	const tabsHeadingId = "destination-tabs";
	const tabsData = {
		tabNames: destinationsData.map((curr) => curr.name),
		tabContents: destinationsData.map((curr, i) => (
			<DestinationTab key={i} data={curr} />
		)),
	};

	return (
		<>
			<main className={`page-section-container ${styles.wrapper}`}>
				<div className={styles.headingWrapper}>
					<span className={`text-lg ${styles.headingNumber}`}>
						01
					</span>
					<h1
						className={`text-lg ${styles.heading}`}
						id={tabsHeadingId}
					>
						Pick your destination
					</h1>
				</div>
				<Tabs
					tabsHeadingId={tabsHeadingId}
					tabsData={tabsData}
					classNames={{
						wrapper: styles.tabs,
						tabList: styles.tabList,
						tab: styles.tab,
						tabName: styles.tabName,
						tabContentWrapper: styles.tabContentWrapper,
					}}
				/>
			</main>
			<picture>
				<source
					srcSet={`${
						process.env.NEXT_PUBLIC_BASE_PATH || ""
					}/assets/destination/background-destination-desktop.jpg`}
					type="image/jpeg"
					media="(min-width: 1025px)"
				/>
				<source
					srcSet={`${
						process.env.NEXT_PUBLIC_BASE_PATH || ""
					}/assets/destination/background-destination-tablet.jpg`}
					type="image/jpeg"
					media="(min-width: 768px)"
				/>
				<img
					className="page-bg"
					src={`${
						process.env.NEXT_PUBLIC_BASE_PATH || ""
					}/assets/destination/background-destination-mobile.jpg`}
					alt=""
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
