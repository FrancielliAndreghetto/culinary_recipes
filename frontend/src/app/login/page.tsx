import Image from "next/image"
import logo from "../../assets/image/Logo.png"
import login from "../../assets/image/login.png"

export default function Login() {
    return (
        <section className="h-screen">
            <div className="flex h-full flex-end items-center gap-24 px-32 py-16 bg-gradient-to-r from-[#FEDCC5] to-[#FEDDC6] max-lg: justify-center">
                <div className="w-[500px] h-[600px] shadow-sm drop-shadow-[0_4px_70xpx_rgba(0,0,0,0.10)] bg-[rgba(255,255,255,0.30)] backdrop-blur-3xl rounded-3xl">
                    <div className="p-24 flex flex-col gap-6">
                        <Image src={logo} alt="logo" className="m-auto" />
                        <h1 className="text-gray-950 text-3xl font-semibold">Login</h1>
                        <form className="flex flex-col gap-5">
                            <div className="flex flex-col">
                                <label className="text-gray-950 text-sm font-normal" htmlFor="email">E-mail</label>
                                <input className="bg-white rounded-md border-solid border-[0.5px] border-[rgba(255,161,74,0.7)] h-9 pl-4 focus:outline-none text-sm" placeholder="Seu e-mail" type="email" id="email" name="email"></input>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-950 text-sm font-normal" htmlFor="password">Senha</label>
                                <input className="bg-white rounded-md border-solid border-[0.5px] border-[rgba(255,161,74,0.7)] h-9 pl-4 focus:outline-none text-sm" type="password" id="password" name="password"></input>
                                <a href="forgot-password" className="hover:underline text-xs font-normal mt-1 w-fit">Esqueceu a senha?</a>
                            </div>
                            <button className="w-full h-12 bg-[rgba(255,161,74,0.7)] rounded-md text-white">Logar-se</button>
                            <h2 className="text-xs font-normal">Você não tem uma conta? <a href="Register" className="text-xs font-semibold hover:underline">Registre-se aqui</a> </h2>
                        </form>
                    </div>
                </div>
                <div className="w-2/4 max-lg:hidden">
                    <Image src={login} alt="login" />
                </div>
            </div>
        </section>
    )
}