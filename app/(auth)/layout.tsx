import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full font-inter">
      {/* Content area */}
      <div className=" w-full sm:w-full xl:w-full  ">
        {children}
      </div>
      {/* Auth image area, hidden on smaller screens */}
      <div className="auth-asset hidden lg:block">
        <div className="relative">
          <Image
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={680}
            height={600}
            className="rounded-l-xl object-contain -rotate-6 border-r-4 border-gray-300 shadow-2xl fixed top-0 right-0 glow-effect"
          />
        </div>
      </div>
    </main>
  );
}
