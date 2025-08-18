import { AppleHelloEnglishEffect } from "@/components/ui/apple-hello-effect";

const AppleHelloEffectDemo = () => {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center gap-16">
      <AppleHelloEnglishEffect speed={1.1} className="text-cyan-300" />
    </div>
  );
};

export default AppleHelloEffectDemo;
export { AppleHelloEffectDemo };