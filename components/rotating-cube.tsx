"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function RotatingCube() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        @keyframes counter-rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(-360deg);
          }
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0.2;
          }
        }

        .cube-container {
          animation: rotate 13s infinite linear;
          transform-style: preserve-3d;
        }

        .cube-container.paused {
          animation-play-state: paused;
        }

        .cube-face {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.15);
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }

        .logo-container {
          animation: counter-rotate 13s infinite linear;
          transform-style: preserve-3d;
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-container.paused {
          animation-play-state: paused;
        }

        .logo-container img {
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .press-to-start {
          animation: blink 1.05s steps(2, end) infinite;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.18);
        }
      `}</style>

      <div className="flex flex-col items-center gap-28">
        {/* Title stacked */}
        <div className="flex flex-col items-center text-center">
          <div className="text-white font-[family-name:var(--font-press-start)] text-xl md:text-2xl tracking-wider">
            Areculateir
          </div>
          <h1 className="text-white font-[family-name:var(--font-press-start)] text-3xl md:text-5xl tracking-wider leading-none">
            MYSTERY BOX
          </h1>
        </div>

        <div
          className="relative w-40 h-40 transition-transform duration-1000 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: isOpen ? "scale(1.2)" : "scale(1.2)",
          }}
        >
          <div className={`cube-container absolute w-full h-full ${isOpen ? "" : ""}`}>
            {/* Areculateir Logo - counter-rotates to stay facing forward */}
            <div
              className={`logo-container absolute inset-0 flex flex-col items-center justify-center z-10 ${isOpen ? "" : ""}`}
              style={{ transform: `translateZ(80px)` }}
            >
              {/* Only show when open */}
              {isOpen && (
                <div className="press-to-start mb-4 text-white font-[family-name:var(--font-press-start)] text-xs md:text-sm tracking-widest">
                  PRESS TO START
                </div>
              )}

              <img
                src="/popup.png"
                alt="Areculateir Logo"
                width="220"
                height="220"
                className="brightness-0 invert"
                style={{ transform: isOpen ? "scale(1)" : "scale(0.65)" }}
              />
            </div>

            {/* Front face */}
            <div
              className="cube-face absolute w-40 h-40 flex items-center justify-center border-secondary border-dashed border-4"
              style={{
                transform: isOpen ? `translateZ(160px) translateY(50%) rotateX(-69deg)` : `translateZ(80px)`,
              }}
            >
              <span className="text-white font-[family-name:var(--font-press-start)] text-4xl">?</span>
            </div>

            {/* Right face */}
            <div
              className="cube-face absolute w-40 h-40 flex items-center justify-center border-secondary border-dashed border-4"
              style={{
                transform: isOpen
                  ? `rotateY(270deg) translateZ(160px) translateY(50%) rotateX(-69deg)`
                  : `rotateY(270deg) translateZ(80px)`,
              }}
            >
              <span className="text-white font-[family-name:var(--font-press-start)] text-4xl">?</span>
            </div>

            {/* Back face */}
            <div
              className="cube-face absolute w-40 h-40 flex items-center justify-center border-secondary border-dashed border-4"
              style={{
                transform: isOpen
                  ? `rotateY(180deg) translateZ(160px) translateY(50%) rotateX(-69deg)`
                  : `rotateY(180deg) translateZ(80px)`,
              }}
            >
              <span className="text-white font-[family-name:var(--font-press-start)] text-4xl">?</span>
            </div>

            {/* Left face */}
            <div
              className="cube-face absolute w-40 h-40 flex items-center justify-center border-secondary border-4 border-dashed"
              style={{
                transform: isOpen
                  ? `rotateY(90deg) translateZ(160px) translateY(50%) rotateX(-69deg)`
                  : `rotateY(90deg) translateZ(80px)`,
              }}
            >
              <span className="text-white font-[family-name:var(--font-press-start)] text-4xl">?</span>
            </div>

            {/* Top face */}
            <div
              className="cube-face absolute w-40 h-40 -bottom-40 flex items-center justify-center"
              style={{
                transform: `translateY(-50%) rotateX(90deg)`,
                opacity: isOpen ? 0 : 1,
              }}
            >
              <span className="text-white font-[family-name:var(--font-press-start)] text-4xl">?</span>
            </div>

            {/* Bottom face - stays in place */}
            <div
              className="cube-face absolute w-40 h-40 -bottom-40 flex items-center justify-center"
              style={{
                transform: `translateY(-50%) rotateX(90deg)`,
              }}
            >
              <span className="text-white font-[family-name:var(--font-press-start)] text-4xl">?</span>
            </div>
          </div>
        </div>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="bg-black border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          {isOpen ? "Close" : "Open"}
        </Button>
      </div>
    </>
  )
}
