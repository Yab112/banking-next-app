"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Sidebar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar ">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="mb-12 cursor-pointer items-center gap-2 flex
                "
        >
          <Image
            src={"icons/logo.svg"}
            width={30}
            height={30}
            alt="logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">NardosBank</h1>
        </Link>

        {sidebarLinks.map((link) => {
            const isActive = pathname === link.route || pathname.startsWith(link.route + "/");
          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })} //bg-bank-gradient if is-active == true
            >
              <div className="relative size-6">
                   <Image 
                       src={link.imgURL}
                       alt={link.label}
                       fill
                       className={cn({'brightness-[3] invert-0':isActive})}
                   />
              </div>
                <p  className={cn('sidebar-label',{
                    "!text-white":isActive,
                })}>{link.label}</p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default SideBar;
