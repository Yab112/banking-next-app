import Image from "next/image"
import Link from "next/link"
import BankCard from "./BankCard"

const RightSideBar = ({user, transactions, banks}: RightSidebarProps) => {
  return (
    <aside className="right-sidebar ">
        <section className="flex flex-col pb-8">
            <div className="profile-banner"/>
             <div className="profile">
                <div className="profile-img">
                   <span className="text-5xl font-bold text-indigo-600">{user.firstName[0]}</span>
                </div>

             </div>
             <div className="profile-details p-2">
                <h1 className="profile-name">
                    {user.firstName} {user.lastName}
                </h1>
                <p className="profile-email">
                    {user.email}
                </p>
             </div >
        </section>
        <section className="flex flex-col w-full p-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="header-2">
               My Banks
            </h2>
            <Link href={"/"} className="flex gap-2 justify-center items-center">
               <Image  src={"/icons/plus.svg"} alt="plus-icon" width={15} height={15}  className="size-6 max-xl:size-14 " />
               <h2 className="text-14 font-semibold text-gray-500 text-center hover:border-b-2 hover:border-b-indigo-600">Add Bank</h2>
            </Link>
          </div>
          {banks?.length > 0 && (
            <div className="relative flex flex-col items-center justify-center gap-5">
                 <div className="relative z-10 ">
                       <BankCard 
                       key={banks[0].$id}
                       account={banks[0]}
                       userName={`${user.firstName} ${user.lastName}`}
                       showBalance = {false}/>
                 </div>
                 {banks[1] && (
                    <div className="absolute right-0 top-8 z-0 w-[90%]">
                        <BankCard 
                       key={banks[0].$id}
                       account={banks[0]}
                       userName={`${user.firstName} ${user.lastName}`}
                       showBalance = {false}/>
                    </div>
                 )}
            </div>
          )}
        </section>
    </aside>
  )
}

export default RightSideBar