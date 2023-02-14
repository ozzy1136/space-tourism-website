import GitHubLink from "components/GitHubLink";
import PageHeader from "./PageHeader";

export default function Layout({ children }) {
	return (
		<>
			<GitHubLink />
			<PageHeader />
			{children}
		</>
	);
}
