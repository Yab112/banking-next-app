"use client"
import { legoutAccount } from "@/lib/actions/user.action";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLoout = async () => {
    const loggedout = await legoutAccount();
    if (loggedout) {
      router.push("/sign-in");
    }
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-gray-700 text-center font-bold text-xl">
          {user?.name[0]}
        </p>
      </div>

      <div className={type === "mobile" ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.name}
        </h1>
        <p className="text-14 truncate text-gray-600 font-normal">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLoout}>
        <Image src="icons/logout.svg" fill alt="logout image" />
      </div>
    </footer>
  );
};

export default Footer;
