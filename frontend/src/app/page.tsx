import NavBar from "@components/navegation/NavBar"
import { nextAuthOptions } from "@app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth"
import SideBar from "@components/navegation/SideBar";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <main className="">
      <NavBar session={session}></NavBar>
      <SideBar/>
    </main>
  )
}
