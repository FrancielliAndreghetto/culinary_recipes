export default function Login() {
    return (
        <section className="h-screen">
            <div className="flex h-full flex-end items-center gap-24 px-32 py-16 bg-gradient-to-r from-[#FEDCC5] to-[#FEDDC6]">
                <div className="w-[500px] h-[600px] shadow-sm drop-shadow-[0_4px_70xpx_rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.30)] backdrop-blur-3xl rounded-3xl">
                    <div className="p-28">
                        <h1 className="text-gray-950 text-4xl font-semibold">Login</h1>
                        <form>
                            <div className="flex flex-col">
                                <label className="text-gray-950 text-sm font-normal" htmlFor="email">E-mail</label>
                                <input className="bg-white rounded-3xl border-solid border-[0.5px] border-orange-600 h-9 pl-4 focus:outline-none text-sm" placeholder="Seu e-mail" type="email" id="email" name="email"></input>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-950 text-sm font-normal" htmlFor="password">Senha</label>
                                <input className="bg-white rounded-3xl border-solid border-[0.5px] border-orange-600 h-9 pl-4 focus:outline-none text-sm" type="password" id="password" name="password"></input>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}