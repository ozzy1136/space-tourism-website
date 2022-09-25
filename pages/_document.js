import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${
						process.env.NEXT_PUBLIC_BASE_PATH || ""
					}/favicon-32x32.png`}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
