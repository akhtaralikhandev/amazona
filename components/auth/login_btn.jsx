"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });

    console.log(result);
    console.log("this is the result ");
    if (!result?.error) {
    }
  };
  return (
    <div>
      <div className="wrapper text-black flex items-center gap-8 xl:pt-14 p-2 flex-col">
        <div className="top flex  items-center">
          <span>
            <i
              className="fa fa-arrow-circle-down text-yellow-600 text-2xl"
              aria-hidden="true"
            ></i>
          </span>
          <Link href={"/"}>
            <span className="text-black text-2xl">Amazona</span>{" "}
          </Link>
        </div>
        <div className="loginpage flex flex-col gap-6 items-center  border border-black xl:p-8 lg:p-8 md:p-8 p-2 pb-14">
          <span className="text-2xl text-blue-700 ">Sign in</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black p-2 rounded-lg lg:w-72 xl:w-72 outline-blue-600"
            placeholder="email"
          />
          <input
            className="border border-black p-2 xl:w-72 lg:w-72 rounded-lg outline-blue-600"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className=" bg-blue-600 text-white hover:bg-blue-400 p-2 rounded-lg xl:w-72 lg:w-72 outline-blue-600"
          >
            submit
          </button>
        </div>
        <div className="createaccount flex flex-col">
          <span>New To Amazona</span>
          <Link href={"/register"}>
            <button className="text-blue-700 hover:underline">
              Create account here
            </button>{" "}
          </Link>
        </div>
        <div className="bottom">
          <ul className="flex gap-4 xl:flex-row lg:flex-row md:flex-row flex-col">
            <li className=" cursor-pointer hover:text-blue-600">
              condition of use
            </li>
            <li className=" cursor-pointer hover:text-blue-600">privacy</li>
            <li className=" cursor-pointer hover:text-blue-600">
              terms of use
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LoginComponent;
