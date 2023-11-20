import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import AlternateLayout from "@/shared/components/layout/alternate-layout";

const Page: NextPageWithLayout = () => {
  return <div>Content</div>;
};

Page.getLayout = function getLayout(Page: ReactElement) {
  return <AlternateLayout>{Page}</AlternateLayout>;
};

export default Page;
