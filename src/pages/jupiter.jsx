import Loading from "@/components/Loading";
import { Suspense, lazy, memo } from "react";

const Jupitercomponent = lazy(() => import("@/components/jupiter"));

const Jupiter = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Jupitercomponent />
    </Suspense>
  );
};

export default memo(Jupiter);
