import {addDecorator} from "@storybook/react";
import { Center } from "../src/components/Center/Center";
import { ThemeProvider, CSSReset, theme, Box } from '@chakra-ui/core'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

// addDecorator(story => (
//   <ThemeProvider theme={theme}>
//     <CSSReset/>
//     <Box m="4">{story()}</Box>
//   </ThemeProvider>
// ))

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset/>
      <Box m="4">
        <Story />
      </Box>
    </ThemeProvider>
  )
]