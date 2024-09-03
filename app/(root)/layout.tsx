
import SideBar from "@/components/SideBar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')
  return (
    <main className="flex  h-screen w-full font-inter">
        <SideBar user={loggedIn} />
        <div className="flex flex-col size-full">
          <div className="root-layout">
               <Image src="/icons/logo.svg" alt="menu-icon" width={30} height={30}  className="size-14 max-xl:size-14 " />
               <div>
                  <MobileNav user={loggedIn} />
               </div>
          </div>

        {children }
        </div>
    </main>
  );
}
