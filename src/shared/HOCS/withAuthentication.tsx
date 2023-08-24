"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { intendedUserPathAtom } from "../global-state/jotai";

const withAuthentication = (WrappedComponent: React.FC) => {
  const AuthenticatedRoute: React.FC = (props) => {
    const router = useRouter();
    const pathname = usePathname();
    const [intendedUserPath, setIntendedUserPath] =
      useAtom(intendedUserPathAtom);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuthentication = () => {
        const userToken = localStorage.getItem("user");
        if (userToken === null) {
          setIntendedUserPath(pathname);
          router.push("/login");
        } else {
          setIsLoading(false);
          router.push(intendedUserPath);
        }
      };

      checkAuthentication();
    }, []);

    if (isLoading) {
      // Render a loading screen or spinner while checking authentication
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedRoute;
};

export default withAuthentication;
