import { useContext, type PropsWithChildren, useRef } from "react";
import { ClassValue, cn } from "../lib";
import { AccordionItemContext } from "./lib";

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
      data-state={isOpened}
      className={cn("transition-all overflow-hidden", className)}
      style={{
        height: isOpened ? height || 0 : 0,
      }}
    >
      <div
        className="py-4 px-2"
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
};
