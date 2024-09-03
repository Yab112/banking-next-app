import AuthForm from "@/components/AuthForm";
import Link from "next/link";  // Use 'next/link' for navigation in Next.js

const SignIn = () => {
  return (
    <section className="flex-center max-sm:px-6 flex flex-col">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
