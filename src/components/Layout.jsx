import { Flex } from "theme-ui";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Flex sx={{ flexDirection: "row" }}>
        <Sidebar />
        <div style={{ marginLeft: "15px", marginTop: "15px" }}>{children}</div>
      </Flex>
    </div>
  );
}
