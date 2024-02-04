export const theme = {
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  colors: {
    backgroundWhite: "#fff",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Poppins, sans-serif",
  },
  buttons: {
    primary: {
      fontWeight: "bold",
      color: "black",
      bg: "inherit",
      cursor: "pointer",
    },
    blue: {
      fontWeight: "bold",
      color: "black",
      bg: "#33FFFF",
      cursor: "pointer",
    },
    red: {
      fontWeight: "bold",
      color: "white",
      bg: "#FF0000",
      cursor: "pointer",
    },
    green: {
      fontWeight: "bold",
      color: "black",
      bg: "#99FF33",
      cursor: "pointer",
    },
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
    },
    decoration: {
      textDecoration: "none",
    },
  },
  navbar: {
    container: {
      width: "1170px",
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      px: "15px",
      bg: "backgroundWhite",
      borderBottom: "1px solid #eceef3",
    },
  },
  label: {
    h2: {
      fontSize: 25,
      fontFamily: "heading",
      fontWeight: "body",
      color: "primary",
      mb: 2,
    },
    header: {
      fontSize: 32,
      fontWeight: "900",
      textAlign: "center",
      fontFamily: "heading",
      fontWeight: "body",
      color: "primary",
      mb: 2,
    },
  },
  forms: {
    label: {
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      border: "2px solid",
      width: "500px",
      "&:focus": {
        borderRadius: "10px",
        borderColor: "blue",
        outline: "none",
      },
    },
    select: {
      border: "2px solid",
      borderColor: "gray",
      "&:focus": {
        borderColor: "blue",
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      border: "2px solid",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
    },
  },
};
