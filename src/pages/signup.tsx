"use client";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userDetailsAtom } from "@/store/store";
import { useState } from "react";
import useFetch from "@/hooks/useFetch";

export default function SignUp() {
  const [userDetails, setUserDetails] = useAtom(userDetailsAtom);
  const [data, setData] = useState();

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

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data) {
      router.push("/");
      return;
    }
    console.log("Error"); // toast popup signup failed
  };

  return (
    <form onSubmit={handleSignUp}>
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
      <button type="submit">Sign Up</button>
    </form>
  );
}
