import styles from "./index.module.css";

import TabList from "components/shared/TabList";
import DestinationTab from "components/DestinationTab";

export default function DestinationTabList({ data }) {
	const tabListData = data.map((curr) => {
		return {
			tabName: curr.name,
			tabContent: <DestinationTab data={curr} />,
		};
	});

	return (
		<TabList
			classNames={{
				wrapper: styles.tabs,
				heading: styles.tabsHeading,
				tabList: styles.tabList,
				tab: styles.tab,
				tabName: styles.tabName,
				tabContentWrapper: styles.tabContentWrapper,
			}}
			tabListTitle="Danish Composers"
			tabListHeadingId="tablist-1"
			tabListData={tabListData}
		/>
	);
}
