import Link from "next/link";
import { Box, Button, Flex, Input, Label, Select, Text } from "theme-ui";

export default function RegisterForm() {
  return (
    <Flex as="form" sx={{ flexDirection: "column" }}>
      <Text variant="label.header">Register user</Text>
      <Label variant="label.h2" htmlFor="username">
        Username
      </Label>
      <Input type="text" name="username" id="username" mb={4} />

      <Label variant="label.h2" htmlFor="email">
        Email
      </Label>
      <Input type="email" name="email" id="email" mb={4} />

      <Label variant="label.h2" htmlFor="password">
        Password
      </Label>
      <Input type="password" name="password" id="password" mb={4} />

      <Text variant="label.h2">User Role:</Text>
      <Select name="sound" id="sound" mb={4}>
        <option>Admin</option>
        <option>User</option>
      </Select>

      <Link href="/dashboard/register">
        <Button variant="green">
          <Text sx={{ textDecoration: "none" }}>Register</Text>
        </Button>
      </Link>
    </Flex>
  );
}
