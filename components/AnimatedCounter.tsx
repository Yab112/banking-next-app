import CountUp from "react-countup"
const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className="w-full">
      <CountUp 
        end={amount} 
        prefix="$ " 
        duration={0.5} 
        decimals= {2}
        separator="," 
        decimal = "."
      />
    </div>
  )
}

export default AnimatedCounter
