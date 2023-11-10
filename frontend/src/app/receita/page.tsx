'use client'

import NavBar from "@components/navegation/NavBar";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import Image from "next/image";
import pizza from "@assets/pizza.jpg";
import lasanha from "@assets/lasanha.jpg";
import massa from "@assets/massa.jpg";
import bolo from "@assets/bolo.jpg";
import { useEffect } from "react";

export default function Receita() {
  useEffect(() => {
    const video = document.querySelector('.video-react-html5-video') as HTMLVideoElement;

    const playVideo = async () => {
      if (video) {
        try {
          await video.play();
        } catch (error) {
          console.error('Erro ao reproduzir o vídeo:', error);
        }
      }
    };

    playVideo();
  }, []);

  return (
    <>
      <NavBar />
      <main className="relative z-1">
        <div className="container z-1 mx-auto py-10">
          <div className="flex w-full justify-center h-full bg-[rgb(255,255,255,0.50)] backdrop-blur-md rounded-2xl">
            <div className="p-16 w-full flex gap-5">
              <div className="w-9/12">
                <Player
                  muted
                  autoPlay
                  playsInline
                  preload="auto"
                  poster="@assets/bolo.jpg"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                >
                </Player>
              </div>
              <div className="w-3/12 flex gap-3 justify-center flex-col">
                <Image className="w-full h-44 rounded-lg object-cover" src={bolo} alt="bolo" />
                <Image className="w-full h-44 rounded-lg object-cover" src={bolo} alt="bolo" />
                <Image className="w-full h-44 rounded-lg object-cover" src={bolo} alt="bolo" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}