import { ReactElement, useState, useRef, useEffect } from "react";

/**
 * @param {object} props
 * @param {string} props.tabsHeadingId
 * @param {{tabNames: string[]?, tabAriaLabels: string[]?, tabContents: ReactElement[]}} props.tabsData
 * @param {{wrapper: string, tabList: string, tab: string, tabName: string, tabContentWrapper: string}} props.classNames
 *
 */
export default function TabList({ tabsHeadingId, tabsData, classNames }) {
	/*
	 * 	This content is licensed according to the W3C Software License at
	 * 	https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	 *
	 * 	File:   tabs-manual.js
	 *
	 * 	Desc:   Tablist widget that implements ARIA Authoring Practices
	 */
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
		<div className={classNames.wrapper}>
			<div
				className={classNames.tabList}
				role="tablist"
				aria-labelledby={tabsHeadingId}
			>
				{tabsData.tabContents.map((_, i) => (
					<button
						className={classNames.tab}
						key={i}
						id={`tab-${i + 1}`}
						type="button"
						role="tab"
						aria-label={
							tabsData.hasOwnProperty("tabAriaLabels")
								? tabsData.tabAriaLabels[i]
								: undefined
						}
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
								: i === tabsData.tabContents.length - 1
								? lastTabRef
								: undefined
						}
					>
						{tabsData.hasOwnProperty("tabNames")
							? tabsData.tabNames[i]
							: null}
					</button>
				))}
			</div>
			{tabsData.tabContents.map((tabContent, i) => (
				<article
					className={classNames.tabContentWrapper}
					key={i}
					id={`tabpanel-${i + 1}`}
					role="tabpanel"
					aria-labelledby={`tab-${i + 1}`}
					hidden={selectedTabId !== `tab-${i + 1}`}
				>
					{tabContent}
				</article>
			))}
		</div>
	);
}
