import localFont from 'next/font/local';

export const satoshi = localFont({
  variable: '--font-satoshi',
  src: [
    {
      path: '../assets/fonts/satoshi/Satoshi-Variable.ttf',
      weight: '400 700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/satoshi/Satoshi-VariableItalic.ttf',
      weight: '400 700',
      style: 'italic',
    },
  ],
  display: 'swap',
});
