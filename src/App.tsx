import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

function App() {
  return (
    <main className="h-dvh w-full flex items-center justify-center">
      <Accordion className="bg-white min-w-[40rem]">
        <AccordionItem value="1">
          <AccordionTrigger className="bg-gray-200">
            <p>Trigger 1</p>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger className="bg-gray-200">
            <p>Trigger 2</p>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern. 2222
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger className="bg-gray-200">
            <p>Trigger 3</p>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern. 2222
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger className="bg-gray-200">
            <p>Trigger 4</p>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern. 2222
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default App;
