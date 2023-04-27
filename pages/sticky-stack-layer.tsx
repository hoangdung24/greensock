import dynamic from "next/dynamic";

const StickyStackLayer = dynamic(() => import("@/containers/StickyStackLayer"), {
  ssr: false,
});

function StickyStackLayerPage() {
  return <StickyStackLayer />;
}

export default StickyStackLayerPage;
