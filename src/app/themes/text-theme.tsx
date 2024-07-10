import { extendTheme, defineStyleConfig } from '@chakra-ui/react'

export const Textt = defineStyleConfig({
  sizes: {
    sm: {
    fontSize: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
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