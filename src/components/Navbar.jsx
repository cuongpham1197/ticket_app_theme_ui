import Link from "next/link";
import { Box, Button, Flex, Text } from "theme-ui";
import { theme } from "../../themes";

export default function Navbar() {
  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        py: "5px",
        bg: "#EEEEEE",
      }}
      variant="navbar.container"
    >
      <Box>
        <Link href="/">
          <Button variant="primary">
            <Text sx={{ textDecoration: "none" }}>Manage Ticket App</Text>
          </Button>
        </Link>
      </Box>

      <Flex sx={{ flexDirection: "row", gap: "10px" }}>
        <Link href="/">
          <Button>
            <Text sx={{ textDecoration: "none" }}>Home</Text>
          </Button>
        </Link>
        <Link href={`/TicketPage`}>
          <Button>
            <Text sx={{ textDecoration: "none" }}>Create new ticket</Text>
          </Button>
        </Link>

        <Link href="/dashboard/login">
          <Button variant="blue">
            <Text sx={{ textDecoration: "none" }}>Login</Text>
          </Button>
        </Link>
        <Link href="/dashboard/register">
          <Button variant="green">
            <Text sx={{ textDecoration: "none" }}>Register</Text>
          </Button>
        </Link>
        <Link href="/dashboard/login">
          <Button variant="red">
            <Text sx={{ textDecoration: "none" }}>Log out</Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
