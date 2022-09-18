import styles from "./index.module.css";

import React from "react";

export default function DestinationTab({ data }) {
	return (
		<React.Fragment>
			<div className={styles.photoWrapper}>
				<picture>
					<source srcSet={data.images.webp} type="image/webp" />
					<img
						src={data.images.png}
						type="image/png"
						alt={`${data.name}`}
					/>
				</picture>
			</div>
			<div className={styles.headingWrapper}>
				<h3 className="text-xxxl" style={{ textAlign: "center" }}>
					{data.name}
				</h3>
			</div>
			<div className={styles.descriptionWrapper}>
				<p style={{ textAlign: "center" }}>{data.description}</p>
			</div>
			<div
				className={styles.distanceWrapper}
				style={{ textAlign: "center" }}
			>
				<p>Avg. distance</p>
				<p>{data.distance}</p>
			</div>
			<div className={styles.timeWrapper} style={{ textAlign: "center" }}>
				<p>Est. travel time</p>
				<p>{data.travel}</p>
			</div>
		</React.Fragment>
	);
}
