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
			<div className={styles.bioWrapper}>
				<h2 className="text-xxxl">{data.name}</h2>
				<p>{data.description}</p>
			</div>
			<div className={styles.divider}></div>
			<div className={styles.distanceWrapper}>
				<p className="text-lg">Avg. distance</p>
				<p className="text-xl">{data.distance}</p>
			</div>
			<div className={styles.timeWrapper}>
				<p className="text-lg">Est. travel time</p>
				<p className="text-xl">{data.travel}</p>
			</div>
		</React.Fragment>
	);
}
