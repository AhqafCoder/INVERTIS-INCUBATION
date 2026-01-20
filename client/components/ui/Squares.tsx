"use client";

import React, { useEffect, useRef } from "react";

interface SquaresProps {
  speed?: number;
  squareSize?: number;
  direction?: "up" | "down" | "left" | "right" | "diagonal";
  borderColor?: string;
  hoverFillColor?: string;
}

const Squares: React.FC<SquaresProps> = ({
  speed = 0.5,
  squareSize = 50,
  direction = "diagonal",
  borderColor = "rgba(255, 255, 255, 0.1)",
  hoverFillColor = "rgba(255, 255, 255, 0.05)",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawSquares = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      const cols = Math.ceil(canvas.width / squareSize) + 2;
      const rows = Math.ceil(canvas.height / squareSize) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * squareSize;
          let y = j * squareSize;

          if (direction === "diagonal") {
            x += offset;
            y += offset;
          } else if (direction === "up") {
            y -= offset;
          } else if (direction === "down") {
            y += offset;
          } else if (direction === "left") {
            x -= offset;
          } else if (direction === "right") {
            x += offset;
          }

          x = ((x % (canvas.width + squareSize)) + canvas.width + squareSize) % (canvas.width + squareSize) - squareSize;
          y = ((y % (canvas.height + squareSize)) + canvas.height + squareSize) % (canvas.height + squareSize) - squareSize;

          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }

      offset += speed;
      animationFrameId = requestAnimationFrame(drawSquares);
    };

    drawSquares();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, squareSize, direction, borderColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default Squares;
