import HeaderBox from "@/components/HeaderBox"
import RightSideBar from "@/components/RightSideBar"
import TotalbalanceBox from "@/components/TotalbalanceBox"
import { getLoggedInUser } from "@/lib/actions/user.action"
const Home = async() => {
  const loggedIn = await getLoggedInUser()
  return (
    <section className='home'>
       <div className='home-content'>
         <header className='home-header'>
               <HeaderBox 
               type="greeting"
               title="Welcome"
               user={loggedIn.name}
               subtext="Here is your dashboard for your banking needs and transactions history."
               />
          <TotalbalanceBox 
          accounts={[]}
          totalBanks = {1}
          totalCurrentBalance = {1200.890}/>
         </header>
         

      Recent Transactions
       </div>
       <RightSideBar
       user={loggedIn}
       transactins = {[]}
       banks={[{currentBalance:1200.890,name:"Nardos Teshome",$id:"1234567890"},{currentBalance:1200.890,name:"Yabibal Eshetie",$id:"1234567890"}]}
       />
    </section>
  )
}

export default Home