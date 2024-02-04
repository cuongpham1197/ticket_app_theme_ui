import Link from "next/link";
import { Box, Button, Flex, Input, Label, Select, Text } from "theme-ui";

export default function LoginForm() {
  return (
    <Flex as="form" sx={{ flexDirection: "column", width: "100%" }}>
      <Text variant="label.header">Login user</Text>
      <Label variant="label.h2" htmlFor="email">
        Email
      </Label>
      <Input type="email" name="email" id="email" mb={4} />

      <Label variant="label.h2" htmlFor="password">
        Password
      </Label>
      <Input type="password" name="password" id="password" mb={4} />

      <Link href="/dashboard/login">
        <Button variant="blue">
          <Text sx={{ textDecoration: "none" }}>Login</Text>
        </Button>
      </Link>
    </Flex>
  );
}
