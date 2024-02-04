import Link from "next/link";
import {
  Box,
  Button,
  Flex,
  Input,
  Label,
  Radio,
  Select,
  Slider,
  Text,
  Textarea,
} from "theme-ui";

export default function TicketForm() {
  return (
    <Flex as="form" sx={{ flexDirection: "row", width: "100%", gap: "60px" }}>
      <Flex sx={{ flexDirection: "column" }}>
        <Text variant="label.header">Create new ticket</Text>
        <Label variant="label.h2" htmlFor="title">
          Title
        </Label>
        <Input type="text" name="title" id="title" mb={4} />

        <Label variant="label.h2" htmlFor="description">
          Description
        </Label>
        <Textarea name="description" id="description" rows={6} mb={3} />

        <Flex mb={4}>
          <Label>
            <Radio name="priority" /> 1
          </Label>
          <Label>
            <Radio name="priority" /> 2
          </Label>
          <Label>
            <Radio name="priority" /> 3
          </Label>
          <Label>
            <Radio name="priority" /> 4
          </Label>
          <Label>
            <Radio name="priority" /> 5
          </Label>
        </Flex>

        <Link href="/dashboard/register">
          <Button variant="green" sx={{ width: "350px", mb: "20px" }}>
            <Text sx={{ textDecoration: "none" }}>Create new ticket</Text>
          </Button>
        </Link>
      </Flex>

      <Flex sx={{ flexDirection: "column", width: "300px", mt: "42px" }}>
        <Text variant="label.h2">Category:</Text>
        <Select name="category" id="category" mb={4}>
          <option>Work</option>
          <option>Project</option>
          <option>Other</option>
        </Select>

        <Text variant="label.h2">Status:</Text>
        <Select name="status" id="status" mb={4}>
          <option>Not started</option>
          <option>Started</option>
          <option>Done</option>
        </Select>

        <Label variant="label.h2">Slider</Label>
        <Slider defaultValue={0} mb={3} />
      </Flex>
    </Flex>
  );
}
