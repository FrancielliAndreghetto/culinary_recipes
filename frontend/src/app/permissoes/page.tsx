'use client'
import CargoCard from "@components/cards/CargoCard";
import NavBar from "@components/navegation/NavBar";
import eu from "@assets/eu.jpg"
import DataTable from "@components/table/DataTable";
import AddRoleCard from "@components/cards/AddRoleCard";

export default function cargos() {
    return (
        <>
            <main className="relative z-1">
                <NavBar/>
                <div className="py-10 px-16">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-3xl">Role List</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum animi accusamus ipsum, repellendus eveniet consequatur quam consequuntur vero sequi sint illum tempore ipsam assumenda quas suscipit optio reiciendis laudantium nobis.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <CargoCard users="Total user" title="Administrador" imageURL={eu}></CargoCard>
                            <CargoCard users="Total user" title="Administrador" imageURL={eu}></CargoCard>
                            <AddRoleCard/>
                        </div>
                    <DataTable/>
                    </div>
                </div>
            </main>
        </>
    )
}