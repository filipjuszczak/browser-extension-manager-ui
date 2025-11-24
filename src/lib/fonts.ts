import localFont from 'next/font/local';

export const NotoSans = localFont({
  src: [
    {
      path: '../../public/fonts/NotoSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/NotoSans-Medium.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/NotoSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ]
});
