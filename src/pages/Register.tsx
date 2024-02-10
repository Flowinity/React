import { ThemeProvider } from "@mui/material/styles"
import theme from "../themes/default.ts"

export default function Register() {
  return (
    <>
      <ThemeProvider theme={theme}>placeholder</ThemeProvider>
    </>
  )
}
