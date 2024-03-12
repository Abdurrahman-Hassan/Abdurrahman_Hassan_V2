import Loading from "@/components/Loading";
import { Suspense, lazy, memo } from "react";

const Venuscomponent = lazy(() => import("@/components/venus"));

const Venus = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Venuscomponent />
    </Suspense>
  );
};

export default memo(Venus);
