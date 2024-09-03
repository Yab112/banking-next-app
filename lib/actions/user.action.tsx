"use server"

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { error } from "console";

export const SignIn = async (userData:signInProps) =>{
    try {
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(userData.email, userData.password);

        return parseStringify(session)
    } catch (error) {
        console.log(error)
    }
}

export const SignUp = async (userData:SignUpParams) =>{
    const {email,password,lastName,firstName} = userData
    try {
        const { account } = await createAdminClient();
        const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        return parseStringify(newUserAccount)
}
catch{
    console.log(error)
}
}
export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get();

      return parseStringify(user)
    } catch (error) {
      return null;
    }
  }
  export const legoutAccount = async () => {
    try {
      const { account } = await createSessionClient();
      
      // Delete the session cookie
      cookies().delete('appwrite-session');
  
      // Delete the current session
      await account.deleteSession('current');
      return true;
    } catch (error) {
      console.error('Error logging out:', error);
      return false;
    }
  };
  