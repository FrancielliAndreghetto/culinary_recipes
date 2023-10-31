import Image from "next/image";
import logo from "@assets/icon.png";

export default function NavBar({ ...props }) {
	return (
		<nav className="px-10 items-center flex justify-between backdrop-blur-md bg-gradient-to-br from-[rgba(255,255,255,0.50)] to-[rgba(255,255,255,0.50)] h-16 w-full">
			<Image className="h-10 w-auto" src={logo} alt="logo" />
			<div className="w-96 flex">
				<input placeholder="Pesquisar" name="search" id="search"></input>
			</div>
			<div className="w-20">

			</div>
		</nav>
	)
}