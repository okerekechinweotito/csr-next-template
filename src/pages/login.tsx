"use client";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { intendedUserPathAtom, userDetailsAtom } from "@/store/store";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";

export default function LoginIn() {
  const [data, setData] = useState();
  const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
  const [intendedUserPath, setIntendedUserPath] = useAtom(intendedUserPathAtom);
  const router = useRouter();
  const dispatchServer = useFetch();
  (async () => {
    const data = await dispatchServer({
      requestType: "POST",
      key: "todo",
      url: "https://jsonplaceholder.typicode.com/todos/1",
      authToken: "",
      payLoad: userDetails,
    });
    setData(data);
  })();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data) {
      router.push(intendedUserPath);
      localStorage.setItem("user", JSON.stringify(userDetails));
      return;
    }
    console.log("Error"); // toast popup signup failed
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        value={userDetails.email}
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={userDetails.password}
        onChange={(e) =>
          setUserDetails({ ...userDetails, password: e.target.value })
        }
        placeholder="Password"
        required
      />
      <button type="submit">Sign in</button>
    </form>
  );
}
