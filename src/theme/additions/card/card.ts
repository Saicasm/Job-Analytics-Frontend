import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
const Card = {
  baseStyle: (props: StyleFunctionProps) => ({
    p: '20px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    borderRadius: '20px',
    minWidth: '0px',
    wordWrap: 'break-word',
    bg: mode('#ffffff', 'bg.dark.secondary')(props),
    backgroundClip: 'border-box',
  }),
};

export const CardComponent = {
  components: {
    Card,
  },
};
