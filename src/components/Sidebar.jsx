import Link from "next/link";
import { Box, Button, Flex, Text } from "theme-ui";

export default function Sidebar() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "94vh",
        width: "200px",
        bg: "#CCCCCC",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Link href="/dashboard">
          <Button sx={{ my: "20px" }}>
            <Text sx={{ textDecoration: "none" }}>Manage Tickets</Text>
          </Button>
        </Link>
        <Link href="/ManageUser">
          <Button>
            <Text sx={{ textDecoration: "none" }}>Manage User</Text>
          </Button>
        </Link>
      </Box>

      <Box sx={{ mb: "10px" }}>
        <Link href="/UserInfo">
          <Button>
            <Text sx={{ textDecoration: "none" }}>Account</Text>
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
