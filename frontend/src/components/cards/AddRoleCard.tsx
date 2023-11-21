import Button from "@components/button/Button";
import Image from "next/image";
import Role from "@assets/roles.png"

export default function AddRoleCard() {
    return (
        <div className="bg-[#ffffffaa] w-full h-full gap-4 px-7 py-4 rounded-lg shadow-md">
            <div className="flex gap-4 justify-between items-center">
                <Image className="w-5/12" src={Role} alt="Roles" width={500}/>
                <Button className="w-5/12 h-12 bg-[rgba(225,152,83,0.7)] rounded-md text-white hover:bg-[rgba(207,140,76,0.7)]">Nova função</Button>
            </div>
        </div>
    )
}