import { ReactElement, useState, useRef, useEffect } from "react";
import filterClassNames from "utils/filterClassNames";

/**
 * @param {object} props
 * @param {{wrapper: string, heading: string, tabList: string, tab: string, tabName: string, tabContentWrapper: string}} props.classNames
 * @param {{tabName: string, tabContent: ReactElement}[]} props.tabListData
 *
 */
export default function TabList({
	classNames,
	tabListTitle,
	tabListHeadingId,
	tabListData,
}) {
	/*
	 * 	This content is licensed according to the W3C Software License at
	 * 	https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	 *
	 * 	File:   tabs-manual.js
	 *
	 * 	Desc:   Tablist widget that implements ARIA Authoring Practices
	 */

	/**
	 * @type {string[]}
	 */
	const tabNames = tabListData.reduce((acc, curr, i) => {
		acc[i] = curr.tabName;
		return acc;
	}, []);

	/**
	 * @type {ReactElement[]}
	 */
	const tabContents = tabListData.reduce((acc, curr, i) => {
		acc[i] = curr.tabContent;
		return acc;
	}, []);

	const firstTabRef = useRef();
	const lastTabRef = useRef();
	const [selectedTabId, setSelectedTabId] = useState();

	useEffect(() => {
		setSelectedTabId(firstTabRef.current.id);

		return () => {
			setSelectedTabId(undefined);
		};
	}, [firstTabRef]);

	function moveFocusToTab(currentTab) {
		currentTab.focus();
	}

	function moveFocusToPreviousTab(currentTab) {
		if (currentTab === firstTabRef.current) {
			moveFocusToTab(lastTabRef.current);
		} else {
			moveFocusToTab(currentTab.previousElementSibling);
		}
	}

	function moveFocusToNextTab(currentTab) {
		if (currentTab === lastTabRef.current) {
			moveFocusToTab(firstTabRef.current);
		} else {
			moveFocusToTab(currentTab.nextElementSibling);
		}
	}

	function onKeyDown(e) {
		let tgt = e.currentTarget,
			flag = false;

		switch (e.key) {
			case "ArrowLeft":
				moveFocusToPreviousTab(tgt);
				flag = true;
				break;

			case "ArrowRight":
				moveFocusToNextTab(tgt);
				flag = true;
				break;

			case "Home":
				moveFocusToTab(firstTabRef.current);
				flag = true;
				break;

			case "End":
				moveFocusToTab(lastTabRef.current);
				flag = true;
				break;

			default:
				break;
		}

		if (flag) {
			e.stopPropagation();
			e.preventDefault();
		}
	}

	function onClick(e) {
		setSelectedTabId(e.currentTarget.id);
	}

	return (
		<div className={filterClassNames(["tabs", classNames.wrapper])}>
			<h3 className={classNames.heading} id={tabListHeadingId}>
				{tabListTitle}
			</h3>
			<div
				className={classNames.tabList}
				role="tablist"
				aria-labelledby={tabListHeadingId}
			>
				{tabNames.map((tabName, i) => (
					<button
						className={classNames.tab}
						key={i}
						id={`tab-${i + 1}`}
						type="button"
						role="tab"
						aria-controls={`tabpanel-${i + 1}`}
						aria-selected={
							selectedTabId === `tab-${i + 1}` ? "true" : "false"
						}
						tabIndex={
							selectedTabId === `tab-${i + 1}` ? undefined : "-1"
						}
						onKeyDown={onKeyDown}
						onClick={onClick}
						ref={
							i === 0
								? firstTabRef
								: i === tabListData.length - 1
								? lastTabRef
								: undefined
						}
					>
						<span
							className={filterClassNames([
								"focus",
								classNames.tabName,
							])}
						>
							{tabName}
						</span>
					</button>
				))}
			</div>
			{tabContents.map((tabContent, i) => (
				<div
					className={classNames.tabContentWrapper}
					key={i}
					id={`tabpanel-${i + 1}`}
					role="tabpanel"
					aria-labelledby={`tab-${i + 1}`}
					hidden={selectedTabId !== `tab-${i + 1}`}
				>
					{tabContent}
				</div>
			))}
		</div>
	);
}
