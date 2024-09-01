"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CustomeInput from "@/components/CustomeInput";
import { authformSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import {
  Form
} from "@/components/ui/form";
import { sign } from "crypto";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isloading, setisloading] = useState(false);

  const formSchema = authformSchema(type)

  const formMethods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName :"",
      lastName:"",
      dateOfBirth:"",
      Address:"",
      State:"",
      postalCode:"",
      ssn:"",
      city:"",

    },
  });

  // Submit handler
  const onSubmit =async (values: z.infer<typeof formSchema>) => {
    setisloading(true);
      try {
        if (type === "sign-up") {
          const userData = {
            fistName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            dateOfBirth: values.dateOfBirth,
            Address : values.Address,
            State : values.State,
            postalCode: values.postalCode,
            ssn: values.ssn,
          }
          // const newUser = await signUp(userData);
          // setUser(newUser);
        }
        else {
          const userData = {
            email: values.email,
            password: values.password,
          }
          // const response = await signIn(userData);
          // setUser(user);
          // if(response){
          //   router.push("/dashboard");
          // }
          // else{
          //   console.log("error")
          // }
        }
      } catch (error) {
         
         console.log(error)
      }
      finally{
        setisloading(false);
      }
    }
  

  return (
    <section className="auth-form ">
      <header className="flex flex-col md:gap-8">
        <Link href="/" className="cursor-pointer items-center gap-2 flex px-4">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <h1 className="text-26 font-bold text-black-1 text-ibm-plex-serif">
            NardosBank
          </h1>
        </Link>

        <div className="flex flex-col md:gap-3 gap-1">
          <h1 className="text-24 lg:text-36 text-gray-900 font-semibold">
            {user ? "Link Account" : type === "Sign-In" ? "Sign-In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link Your Account To Get Started"
              : "Please Enter Your Data"}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4"></div>
      ) : (
        <>
          <Form {...formMethods}>
            <form
              onSubmit={formMethods.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              {type === "sign-up" && (
                <>
                  <div className="flex  gap-4">
                    <CustomeInput
                      name="firstName"
                      placeholder="Enter your Fname"
                      label="FisrName"
                      control={formMethods.control}
                    />
                    <CustomeInput
                      name="lastName"
                      placeholder="Enter your Lname"
                      label="LastName"
                      control={formMethods.control}
                    />
                  </div>

                  <div className="flex gap-4">
                    <CustomeInput
                      name="Address"
                      placeholder="Enter your Adress"
                      label="Address"
                      control={formMethods.control}
                    />
                    <CustomeInput
                      name="city"
                      placeholder="Enter your city"
                      label="city"
                      control={formMethods.control}
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomeInput
                      name="State"
                      placeholder="Enter your State"
                      label="State"
                      control={formMethods.control}
                    />
                    <CustomeInput
                      name="postalCode"
                      placeholder="Enter your postalCode"
                      label="postalCode"
                      control={formMethods.control}
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomeInput
                      name="dateOfBirth"
                      placeholder="yyyy-mm-dd"
                      label="dateOfBirth"
                      control={formMethods.control}
                    />
                    <CustomeInput
                      name="ssn"
                      placeholder="Enter your ssn"
                      label="ssn"
                      control={formMethods.control}
                    />
                  </div>
                </>
              )}
              <CustomeInput
                name="email"
                placeholder="Enter your email"
                label="Email"
                control={formMethods.control}
              />
              <CustomeInput
                name="password"
                placeholder="Enter your password"
                label="Password"
                control={formMethods.control}
              />
              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="form-btn "
                  disabled={isloading}
                >
                  {isloading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Lading...
                    </>
                  ) : type === "sign-up" ? (
                    "Sign Up"
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1 ">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account ?"
                : "Already have an account!"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
