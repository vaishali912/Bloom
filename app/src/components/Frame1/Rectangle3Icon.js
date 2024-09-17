import { memo, SVGProps } from 'react';

const Rectangle3Icon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 68 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H68V30H0V0Z' fill='#D9D9D9' fillOpacity={0.28} />
  </svg>
);

const Memo = memo(Rectangle3Icon);
export { Memo as Rectangle3Icon };
