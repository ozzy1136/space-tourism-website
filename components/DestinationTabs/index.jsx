import styles from "./index.module.css";

import Tabs from "components/shared/Tabs";
import DestinationTab from "components/DestinationTab";

export default function DestinationTabList({ tabsHeadingId, data }) {
	const tabListData = data.map((curr) => {
		return {
			tabName: curr.name,
			tabContent: <DestinationTab data={curr} />,
		};
	});

	return (
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
	);
}
