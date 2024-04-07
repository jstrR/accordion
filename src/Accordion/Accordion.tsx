import { useState, type PropsWithChildren, useCallback } from "react";
import { ClassValue, cn } from "../lib";
import { AccordionContext } from "./lib";

export const Accordion = ({
  className,
  defaultValue,
  children,
}: PropsWithChildren<{ className?: ClassValue }>) => {
  const [activeValue, setActiveValue] = useState(defaultValue || null);
  const [items, setItems] = useState<string[]>([]);
  const addItem = useCallback(
    (newItem: string) =>
      setItems(items.includes(newItem) ? items : [...items, newItem]),
    [items]
  );
  return (
    <AccordionContext.Provider
      value={{ activeValue, setValue: setActiveValue, items, addItem }}
    >
      <div
        className={cn(
          "flex flex-col rounded-lg border border-gray-600",
          className
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};
