import AuthForm from "@/components/AuthForm"
import { getLoggedInUser } from "@/lib/actions/user.action";

const SignUp =async () => {
  const Loggeduser = await getLoggedInUser();
  console.log(Loggeduser)
  return (
    <section className="flex-cneter size-full max-sm:px-6">
       <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp
