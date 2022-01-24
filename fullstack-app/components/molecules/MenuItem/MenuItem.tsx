import { Text } from "@chakra-ui/react";
import Link from "next/link";

type MenuItemProps = {
  text: string;
  href: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ text, href }) => {
  return (
    <Link href={href} passHref>
      <Text color="gray.500" fontSize="18px">
        <a>{text}</a>
      </Text>
    </Link>
  );
};
