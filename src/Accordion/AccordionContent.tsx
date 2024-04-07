import { useContext, type PropsWithChildren, useRef } from 'react';
import { ClassValue, cn } from '../lib';
import { AccordionItemContext } from './lib';

export const AccordionContent = ({
  className,
  children,
}: PropsWithChildren<{
  className?: ClassValue;
}>) => {
  const ref = useRef<HTMLDivElement>(null);
  const height = ref?.current?.offsetHeight;
  const { isOpened } = useContext(AccordionItemContext);

  return (
    <div
      data-state={isOpened ? 'open' : 'closed'}
      className={cn('overflow-hidden bg-gray-100 transition-all', className)}
      style={{
        height: isOpened ? height || 0 : 0,
      }}
    >
      <div className="px-2 py-4 text-gray-800" ref={ref}>
        {children}
      </div>
    </div>
  );
};
