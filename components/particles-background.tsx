"use client";
import Particles from "@/components/Particles";

export default function ParticlesBackground() {
  return (
    <Particles
      className="fixed inset-0 z-0"
      particleCount={150}
      particleSpread={10}
      speed={0.05}
      particleColors={["#ffffff", "#ffffff", "#ffffff"]}
      alphaParticles
      particleBaseSize={100}
      cameraDistance={20}
    />
  );
}
