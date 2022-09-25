import styles from "./index.module.css";

import fs from "fs/promises";
import path from "path";
import Tabs from "components/shared/Tabs";
import TechnologyTab from "components/TechnologyTab";

export default function Technology({ technologyData }) {
	const tabsHeadingId = "technology-tabs";
	const tabsData = {
		tabNames: (() => {
			let res = [];
			for (let i = 1; i <= technologyData.length; i++)
				res.push(i.toString(10));
			return res;
		})(),
		tabAriaLabels: technologyData.map((curr) => curr.name),
		tabContents: technologyData.map((curr) => (
			<TechnologyTab data={curr} />
		)),
	};

	return (
		<>
			<main className={`page-section-container ${styles.wrapper}`}>
				<div className={styles.headingWrapper}>
					<span className={`text-lg ${styles.headingNumber}`}>
						03
					</span>{" "}
					<h1
						className={`text-lg ${styles.heading}`}
						id={tabsHeadingId}
					>
						Space launch 101
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
					srcSet="/assets/technology/background-technology-desktop.jpg"
					type="image/jpeg"
					media="(min-width: 1025px)"
				/>
				<source
					srcSet="/assets/technology/background-technology-tablet.jpg"
					type="image/jpeg"
					media="(min-width: 768px)"
				/>
				<img
					className="page-bg"
					src="/assets/technology/background-technology-mobile.jpg"
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
		props: { technologyData: content.technology },
	};
}
