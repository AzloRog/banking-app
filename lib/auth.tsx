"use client";
import { account, ID } from "@/db/appwrite";

type type = "sign-in" | "sign-up";
type authInfo = { email: string; password: string };

const auth = (type: type, authInfo: authInfo) => {
  const { email, password } = authInfo;

  const register = async () => {
    await account.create(ID.unique(), email, password);
    login(email, password);
  };

  const login = async (email: string, password: string) => {
    const session = await account.createEmailPasswordSession(email, password);
  };

  if (type == "sign-up") {
    register();
  } else {
    login(email, password);
  }
};

export default auth;
