import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
	return (
		<header className="container mb-5 p-5 mx-auto">
			<Logo />
		</header>
	);
};

export default Header;
