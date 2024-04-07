import { useContext, type PropsWithChildren } from 'react';
import { ClassValue, cn } from '../lib';
import { AccordionContext, AccordionItemContext } from './lib';

export const AccordionTrigger = ({
  className,
  children,
}: PropsWithChildren<{
  className?: ClassValue;
}>) => {
  const { value, isOpened } = useContext(AccordionItemContext);
  const { setValue } = useContext(AccordionContext);
  return (
    <button
      type="button"
      aria-expanded={isOpened}
      className={cn('flex w-full p-2 text-purple-600', className)}
      onClick={() => setValue(isOpened ? null : value)}
    >
      {children}
    </button>
  );
};
