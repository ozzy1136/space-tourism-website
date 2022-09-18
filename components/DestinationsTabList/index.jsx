import styles from "./index.module.css";

import TabList from "components/shared/TabList";
import tabListData from "./destinationsData";

export default function DestinationTabList() {
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
