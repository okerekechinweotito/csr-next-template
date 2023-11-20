import { Center } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "../image/image";

type IconProps = React.ComponentProps<typeof Center> & {
  iconUrl: string;
  href: string;
  bgColor: string;
};

export default function Icon({ iconUrl, href, bgColor, ...props }: IconProps) {
  return (
    <Center
      as={NextLink}
      href={href}
      target="_blank"
      width="40px"
      height="40px"
      borderRadius="full"
      cursor="pointer"
      background={bgColor}
      {...props}>
      <Image width="24px" height="24px" imageUrl={iconUrl} />
    </Center>
  );
}
