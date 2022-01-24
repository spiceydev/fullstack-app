import { Flex, HStack, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MenuItem } from "../../molecules/MenuItem/MenuItem";

type TopBarProps = {};
export const TopBar: React.FC<TopBarProps> = () => {
  return (
    <Flex width="100%" flexDirection="row" alignContent="center" p="1rem 2rem">
      <Text
        fontSize="36px"
        fontWeight="bold"
        lineHeight="42px"
        color="#1f79BA"
        flexGrow={1}
      >
        SuperApp
      </Text>
      <HStack spacing="16px" alignContent="center">
        <MenuItem text="Home" href="/" />
        <MenuItem text="Product" href="/product" />
        <MenuItem text="Pricing" href="/pricing" />
      </HStack>
      <Flex marginLeft="82px">
        <Button variant="solid" colorScheme="blue">
          Get Started
        </Button>
      </Flex>
    </Flex>
  );
};
