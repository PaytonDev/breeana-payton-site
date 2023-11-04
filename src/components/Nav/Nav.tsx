import { Link, Text, Flex, Box } from "@radix-ui/themes";
import { EnvelopeClosedIcon, HomeIcon } from "@radix-ui/react-icons";
import s from "./Nav.module.css";

export const Nav = () => {
  const links = [
    { name: "Home", href: "#", icon: <HomeIcon /> },
    { name: "Recipes", href: "#" },
    { name: "Resume", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Playlist", href: "#" },
    { name: "Contact", href: "#", icon: <EnvelopeClosedIcon /> },
  ];

  return (
    <Box width="100%" p="4" position="sticky" top="0" className={s.nav_container} mx="auto">
      <Flex direction="row" align="center" gap="4" width="100%" justify="center">
        {links.map((link) => (
          <Flex
            key={link.name}
            direction="row"
            align="center"
            gap="2"
            justify="center"
            width="100%"
            height="6"
          >
            <Link href={link.href} className={s.hero_links}>
              {link.icon ? <Flex justify="center">{link.icon}</Flex> : <Text>{link.name}</Text>}
            </Link>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
