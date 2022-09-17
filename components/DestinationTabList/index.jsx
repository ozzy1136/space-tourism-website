import styles from "./index.module.css";

import TabList from "../shared/TabList";
import tabListData from "./destinationData";

export default function DestinationTabList() {
	return (
		<TabList
			classNames={{ wrapper: styles.tabList }}
			tabListTitle="Danish Composers"
			tabListHeadingId="tablist-1"
			tabListData={tabListData}
		/>
	);
}
