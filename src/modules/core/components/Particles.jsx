import { SparklesCore } from "@/modules/core/design-system/sparkles.tsx";

export function Particles() {
  return (
    (<div
      className="h-full w-full absolute inset-0 flex flex-col items-center justify-center overflow-hidden -z-10">

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#c18156" />

        {/* Radial Gradient to fade particles toward edges */}
        <div
          className="absolute inset-0 w-full h-full bg-transparent"
          style={{maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(0,0,0,0.8) 70%, black 100%)'}}
        ></div>
    </div>)
  );
}
