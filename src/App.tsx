import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './Accordion';

function App() {
  return (
    <main className="bg-gradient-purple flex h-dvh w-full items-center justify-center px-5">
      <Accordion className="min-w-full bg-white sm:min-w-[60vw] lg:min-w-[35vw]">
        <AccordionItem value="1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern. 2222
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Trigger 3</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern. 2222
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="4">
          <AccordionTrigger>
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
