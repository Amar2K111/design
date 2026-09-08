import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="MateriaBTP"
      width={878}
      height={150}
      className={`h-8 w-auto shrink-0 ${className}`}
      priority
      unoptimized
    />
  );
}
