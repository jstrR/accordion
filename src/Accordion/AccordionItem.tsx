import { useContext, type PropsWithChildren, useEffect } from 'react';
import { ClassValue, cn } from '../lib';
import { AccordionContext, AccordionItemContext } from './lib';

export const AccordionItem = ({
  className,
  value,
  children,
}: PropsWithChildren<{
  value: string;
  className?: ClassValue;
}>) => {
  const { activeValue, addItem } = useContext(AccordionContext);
  const isOpened = activeValue === value;

  useEffect(() => {
    addItem(value);
  }, [value, addItem]);

  return (
    <div
      data-open={isOpened}
      className={cn(
        'last:border-b-none border-b border-gray-100 first:rounded-t-lg last:rounded-b-lg hover:bg-purple-100',
        className,
      )}
    >
      <AccordionItemContext.Provider value={{ value, isOpened }}>
        {children}
      </AccordionItemContext.Provider>
    </div>
  );
};
