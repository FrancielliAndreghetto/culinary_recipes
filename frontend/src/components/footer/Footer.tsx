export default function Footer({ ...props }) {
  return (
    <footer className="w-full px-10 py-4 flex justify-between items-center backdrop-blur-md bg-gradient-to-br from-[rgba(255,255,255,0.50)] to-[rgba(255,255,255,0.50)]">
      <div className="pl-6 py-4 flex gap-6">
        <a href="#" className="text-sm">Política de privacidade</a>
        <a href="#" className="text-sm">Termos de uso</a>
      </div>
      <p className="text-sm">© 2023 Nome, Trabalho Dev Web e Engenharia de Software </p>
    </footer>
  )
}