import styles from "./index.module.css";

/**
 * @param {object} props
 * @param {{name: string, images: {png: string, webp: string}, role: string, bio: string}[]} props.data
 */
export default function CrewTab({ data }) {
	return (
		<>
			<div className={styles.detailsWrapper}>
				<p
					className={`text-xl ${styles.role}`}
					style={{ opacity: 0.5 }}
				>
					{data.role}
				</p>
				<h2 className={`text-xxl ${styles.name}`}>{data.name}</h2>
				<p className={styles.bio}>{data.bio}</p>
			</div>
			<div className={`center-children ${styles.photoWrapper}`}>
				<picture>
					<source
						srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${
							data.images.webp
						}`}
						type="image/webp"
					/>
					<img
						className={styles.photo}
						src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${
							data.images.png
						}`}
						type="image/png"
						alt={data.name}
					/>
				</picture>
			</div>
		</>
	);
}
