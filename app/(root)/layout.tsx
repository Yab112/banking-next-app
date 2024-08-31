import SideBar from "@/components/SideBar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName:"Yabibal", lastName:"Nardos"}
  return (
    <main className="flex  h-screen w-full font-inter">
        <SideBar user={loggedIn} />
        <div className="flex flex-col size-full">
          <div className="root-layout">
               <Image src="/icons/logo.svg" alt="menu-icon" width={30} height={30} alt="logo" className="size-14 max-xl:size-14 " />
               <div>
                  <MobileNav user={loggedIn} />
               </div>
          </div>

        {children }
        </div>
    </main>
  );
}
