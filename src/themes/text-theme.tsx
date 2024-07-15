import { extendTheme, defineStyleConfig } from '@chakra-ui/react'

export const Textt = defineStyleConfig({
  sizes: {
    sm: {
    fontSize: '50px',
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-1%',
    }
  },
  defaultProps: {
    size: 'sm',
  },
})


const textTheme = extendTheme({
  components: {
    Textt,
  },
})