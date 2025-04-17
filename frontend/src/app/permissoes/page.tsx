import CargoCard from "@components/cards/CargoCard";
import NavBar from "@components/navegation/NavBar";
import icon from "@assets/iconroles.jpg"
import DataTable from "@components/table/DataTable";
import AddRoleCard from "@components/cards/AddRoleCard";

export default function Cargos() {
    return (
        <>
            <main className="relative z-1">
                <NavBar/>
                <div className="py-10 px-16">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-3xl">Cargos e permissões</h1>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <CargoCard users="Total usuários" title="Administradores" imageURL={icon}></CargoCard>
                            <CargoCard users="Total usuários" title="Usuários" imageURL={icon}></CargoCard>
                            <AddRoleCard/>
                        </div>
                    <DataTable/>
                    </div>
                </div>
            </main>
        </>
    )
}