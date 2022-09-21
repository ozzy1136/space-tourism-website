import styles from "./index.module.css";

import fs from "fs/promises";
import path from "path";
import Tabs from "components/shared/Tabs";
import CrewTab from "components/CrewTab";

export default function Crew({ crewData }) {
	const tabsHeadingId = "crew-tabs";
	const tabListData = crewData.map((curr) => ({
		tabName: curr.name,
		tabContent: <CrewTab data={curr} />,
	}));

	return (
		<>
			<main className={`page-section-container ${styles.wrapper}`}>
				<div className={styles.headingWrapper}>
					<span className={`text-lg ${styles.headingNumber}`}>
						02
					</span>
					<h1
						className={`text-lg ${styles.heading}`}
						id={tabsHeadingId}
					>
						Meet your crew
					</h1>
				</div>
				<Tabs
					tabsHeadingId={tabsHeadingId}
					tabListData={tabListData}
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
					srcSet="/assets/crew/background-crew-desktop.jpg"
					type="image/jpeg"
					media="(min-width: 1024px)"
				/>
				<source
					srcSet="/assets/crew/background-crew-tablet.jpg"
					type="image/jpeg"
					media="(min-width: 768px)"
				/>
				<img
					className="page-bg"
					src="/assets/crew/background-crew-mobile.jpg"
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
		props: { crewData: content.crew },
	};
}
