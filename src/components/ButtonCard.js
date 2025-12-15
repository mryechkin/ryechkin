import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import Card from './Card';

const ButtonCard = forwardRef(({ as = 'button', children, className, ...rest }, ref) => (
  <Card as={as} className={twMerge('wtf-ButtonCard', className)} ref={ref} {...rest}>
    {children}
  </Card>
));

export default ButtonCard;
