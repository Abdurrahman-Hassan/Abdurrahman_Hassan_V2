import Loading from "@/components/Loading";
import { Suspense, lazy, memo } from "react";

const Mooncomponent = lazy(() => import("@/components/moon"));

const Moon = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Mooncomponent />
    </Suspense>
  );
};

export default memo(Moon);
