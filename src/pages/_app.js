import { ThemeUIProvider } from "theme-ui";
import { theme } from "../../themes";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeUIProvider>
  );
}
