import { SparklesCore } from "@/components/ui/sparkles";
import { WavyBackgroundDemo } from './WavyBackgroundDemo';
import { TabsDemo } from "./tabs-preview";

export function SparklesPreview() {
  return (
    <div className="h-[100vh] relative -bottom-1 mt-8 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <WavyBackgroundDemo />
        {/* <TabsDemo/> */}
      </div>
      {/* <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div> */}
    </div>
  );
}
