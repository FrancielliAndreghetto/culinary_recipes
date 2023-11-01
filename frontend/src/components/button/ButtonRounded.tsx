import { LucideIcon } from "lucide-react"

interface ButtonProps {
  Icon: LucideIcon;
  href: string;
}


export default function ButtonRounded({ Icon, href, ...props }: ButtonProps) {
  return (
    <a
      href={href}
      className="bg-gray-100 flex rounded-full w-10 h-10 justify-center items-center hover:bg-[rgba(225,152,83,0.7)] hover:text-white"
      {...props}
    >
      <Icon color="#959895" />
    </a>
  )
}