import { useContext, type PropsWithChildren } from "react";
import { ClassValue, cn } from "../lib";
import { AccordionContext, AccordionItemContext } from "./lib";

export const AccordionTrigger = ({
  className,
  hideCollapsible,
  children,
}: PropsWithChildren<{
  className?: ClassValue;
  hideCollapsible?: boolean;
}>) => {
  const { value, isOpened } = useContext(AccordionItemContext);
  const { setValue } = useContext(AccordionContext);
  return (
    <button
      type="button"
      className={cn("flex flex-col text-purple", className)}
      onClick={() => setValue(isOpened ? null : value)}
    >
      {children}
    </button>
  );
};
