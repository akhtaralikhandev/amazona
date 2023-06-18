"use client";
import Link from "next/link";

import axios from "axios";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/navigation";
const RegisterComponent = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password && email) {
      try {
        setLoading(true);
        const resp = await axios.post("/api/user/register", {
          username: username,
          password: password,
          email: email,
        });
        console.log(resp);

        if (resp.status === 200) {
          setLoading(false);
          router.push("/auth/login");
        } else if (resp.status === 403) {
          console.log(resp);
          setLoading(false);
          setError1(resp?.response?.message);
        }
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
          console.log(error);
          setError(error?.response?.data?.message);
          setLoading(false);
        } else {
          setError("Error occured ");
          setLoading(false);
        }
      }
    }
  };
  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError("");
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  console.log(error);
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    );
  } else {
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
            {error && <span className="text-xl text-red-600">{error}</span>}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-black p-2 rounded-lg lg:w-72 xl:w-72 outline-blue-600"
              placeholder="username"
            />
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
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className=" bg-blue-600 text-white hover:bg-blue-400 p-2 rounded-lg xl:w-72 lg:w-72 outline-blue-600"
            >
              submit
            </button>
          </div>
          <div className="createaccount flex flex-col">
            <span>having account</span>
            <Link href={"/auth/login"}>
              <button className="text-blue-700 hover:underline">
                Login here
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
  }
};
export default RegisterComponent;
