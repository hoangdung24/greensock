import dynamic from "next/dynamic";

const Accordion = dynamic(() => import("@/containers/Accordion"), {
  ssr: false,
});

function AccordionPage() {
  return <Accordion />;
}

export default AccordionPage;
