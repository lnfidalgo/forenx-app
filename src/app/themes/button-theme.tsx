import { defineStyleConfig, extendTheme } from '@chakra-ui/react'

export const Buttonn = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 5,
      py: 3, 
    },
    md: {
      fontSize: 'md',
      px: 6, 
      py: 4, 
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'outline',
  },
})

const theme = extendTheme({
  components: {
    Buttonn,
  },
})