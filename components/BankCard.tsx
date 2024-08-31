import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const BankCard = ({ account, userName, showBalance }: CreditCardProps) => {
  return (
    <div className="flex flex-col ">
      <Link href={"/"} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || "Nardos Teshome"}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-14 font-semibold text-white">{userName}</h1>
              <h2 className="text-14 font-semibold text-white">●●/●● </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
            ●●●● ●●●● ●●●●<span className="text-16">1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image
            src={"/icons/Paypass.svg"}
            alt="bank-icon"
            width={20}
            height={24}
          />
          <Image
            src={"/icons/masterCard.svg"}
            alt="master-icon"
            width={45}
            height={32}
            className="ml-4"
          />
        </div>
        <Image
          src={"/icons/lines.svg"}
          alt="bank-icon"
          width={316}
          height={190}
          className="absolute top-0 height-0"
        />
      </Link>
    </div>
  );
};

export default BankCard;
