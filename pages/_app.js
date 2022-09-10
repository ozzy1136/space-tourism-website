import "../global.css";

import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Frontend Mentor | Space tourism website</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
