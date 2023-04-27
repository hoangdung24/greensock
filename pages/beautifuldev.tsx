import dynamic from "next/dynamic";

const BeautifulOnScroll = dynamic(() => import("@/containers/BeautifulOnScroll"), {
  ssr: false,
});

function BeautifulOnScrollPage() {
  return <BeautifulOnScroll />;
}

export default BeautifulOnScrollPage;
