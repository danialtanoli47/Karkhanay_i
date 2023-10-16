"use client";

import { NextPage } from "next";
import { connectToDB } from "@utils/database";

import Image from "next/image";
import { useEffect, useState, FormEvent } from "react";

import { getToken } from "next-auth/react";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

{
  /* 
const updateSession = async (session) => {
  // Update the session object locally
  localStorage.setItem("session", JSON.stringify(session));
};

const getSession = () => {
const session = localStorage.getItem("session");
return session ? JSON.parse(session) : null;
};

const handleSignIn = async () => {
  const userObject = {
    id: 123,
    name: "John Doe",
    email: "john.doe@example.com",
    authenticated: true,
    // additional user properties
  };

  // Store the user object in the session
  const session = await getSession();

  session.user = userObject;

  // Save the updated session
  await session.save();

  // Sign-in success
  alert("Success");
};
*/
}
{
  /* 
const handleEmailSignIn = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
    });

    if (response?.error) {
      // Handle sign-in error
      alert("Sign-in error:", response.error);
    } else {
      // Sign-in success
      alert("success1");

      const userObject = {
        name: "John Doe",
        email: "john.doe@example.com",
        // additional user properties
      };

      await storeUserInSession(userObject);

      closeJoinModal();
    }
  } catch (error) {
    console.log("Sign-in error:", error);
  }
};

const storeUserInSession = async (userObject) => {
  const session = await getSession();
  alert("success");
  // Store the user object in the session
  if (session) {
    session.user = {
      ...session.user,
      name: userObject.name,
    };

    // Save the updated session
    await session.save();
    alert("yes");
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  alert("entering handleSubmit function");

  const res = await signIn("credentials", {
    email: userInfo.email,
    password: userInfo.password,
    redirect: false,
  });
  console
};
*/
}
const JoinModal = ({ handleLogin, closeJoinModal }) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  //UseEffect to Disable Scrolling
  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  return (
    <div
      className="  z-50  "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/**Background div  */}
      <div className="fixed inset-0 bg-neutral-200 bg-opacity-80 transition-opacity"></div>

      {/**Main Div having all the foreground elements */}
      <div className="fixed top-10 sm:top-[-1rem] inset-0 z-10 overflow-y-auto">
        <div className="flex  items-end justify-center text-center sm:items-center ">
          {}
          <div className=" relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:w-full max-w-xs">
            <div className="flex justify-center py-4 pr-2">
              <div className="flex flex-1 justify-center">
                <h1 className="flex text-2xl font-medium text-gray-900 pb-4 relative">
                  <Image
                    src="/assets/icons/logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    className="relative top-0.5 "
                  />
                  <p className="relative top-4 font-roboto left-4">
                    Join Karkhanay
                  </p>
                </h1>
              </div>
              <div className="relative">
                {/**close cross button */}
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center relative bottom-3 "
                  onClick={() => closeJoinModal()}
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>{" "}
            {/**Account Buttons */}
            <div className="pt-4">
              <form className="space-y-3 px-5 " action="#">
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="relative w-full text-white bg-blue-500 hover:bg-blue-600  rounded-md text-md px-5 py-3 text-center "
                    onClick={() => {
                      signIn("facebook");
                      closeJoinModal();
                    }}
                  >
                    <Image
                      src="/assets/icons/facebook-f.svg"
                      alt="facebook-icon"
                      width={30}
                      height={30}
                      className="absolute top-2 left-2"
                    />
                    Continue with Facebook
                  </button>
                </div>
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="relative w-full text-white bg-orange-400 hover:bg-orange-500  rounded-md text-md px-5 py-3 text-center "
                    onClick={() => {
                      {
                        signIn("google");
                        closeJoinModal();
                      }
                    }}
                  >
                    {" "}
                    <Image
                      src="/assets/icons/google.svg"
                      alt="google-icon"
                      width={30}
                      height={30}
                      className="absolute top-2 left-2"
                    />
                    Continue with Google
                  </button>
                </div>
                <div className="flex justify-center">
                  <p className="text-gray-500">OR</p>
                </div>
                <div className="">
                  <input
                    value={userInfo.email}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, email: target.value })
                    }
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm w-full p-1.5 "
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    value={userInfo.password}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, password: target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm  w-full p-1.5"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full text-white bg-green-500 hover:bg-lime-600  rounded-md text-md px-5 py-3 text-center "
                    onClick={() => {
                      /**handleSignIn() 
                      handleLogin();*/
                      //handleEmailSignIn();
                      signIn("credentials", { redirect: false });

                      closeJoinModal();
                    }}
                  >
                    Continue with Email
                  </button>
                </div>
                <div className="flex  border-b border-gray-200 pb-2 items-center justify-between">
                  <div className="flex items-start">
                    <p className="text-xs pb-3"></p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center pt-1 pb-4 text-sm font-medium text-gray-500">
                    <p>Become a Supplier | Affiliate &nbsp;&nbsp; </p>
                    <a href="#" className="text-green-600 hover:underline ">
                      Sign Up
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
