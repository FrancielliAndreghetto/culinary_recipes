import Image, { StaticImageData } from 'next/image';
import { Copy } from 'lucide-react';

interface CardProps {
    users: string;
    title: string;
    imageURL: StaticImageData;
  }

export default function CargoCard ({users, imageURL, title}: CardProps) {
    return (
        <div className="flex flex-col bg-[#ffffffaa] w-full h-full gap-4 px-7 py-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <h1>{users}</h1>
                <div className='flex'>
                    <Image 
                    className="w-8 h-8 rounded-3xl"
                    src={imageURL}
                    alt=""
                    />
                    <Image 
                    className="w-8 h-8 -ml-2 rounded-3xl"
                    src={imageURL}
                    alt=""
                    />
                    <Image 
                    className="w-8 h-8 -ml-2 rounded-3xl"
                    src={imageURL}
                    alt=""
                    />
                    <Image 
                    className="w-8 h-8 -ml-2 rounded-3xl"
                    src={imageURL}
                    alt=""
                    />
                </div>
            </div>
            <h1 className='font-semibold text-xl'>{title}</h1>
            <div className='flex justify-start items-center'>
                <a href=''>Edit role</a>
            </div>
        </div>
    )
}