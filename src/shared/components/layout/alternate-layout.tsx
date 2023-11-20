import { ReactNode } from "react";

type WorkDetailLayoutProps = {
  children: ReactNode;
};

export default function AlternateLayout({ children }: WorkDetailLayoutProps) {
  return (
    <>
      <>
        <main>{children}</main>
      </>
    </>
  );
}
