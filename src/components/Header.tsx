import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
	return (
		<header className="container mb-5 p-5 absolute top-0 left-1/2 -translate-x-1/2">
			<Logo />
		</header>
	);
};

export default Header;
