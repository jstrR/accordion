import { createContext, useContext } from "react";

export const AccordionContext = createContext<{
  activeValue: string | null;
  setValue: (item: string | null) => void;
  items: string[];
  addItem: (newItem: string) => void;
}>({
  activeValue: null,
  setValue: () => {},
  items: [],
  addItem: () => {},
});

export const AccordionItemContext = createContext<{
  value: string | null;
  isOpened: boolean;
}>({
  value: null,
  isOpened: false,
});

// export const useAccordionContext = () => {
//   const context = useContext(AccordionContext);

//   return context;
// };
