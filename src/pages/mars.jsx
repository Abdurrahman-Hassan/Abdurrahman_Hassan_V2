import Loading from "@/components/Loading";
import { Suspense, lazy, memo } from "react";

const Marscomponent = lazy(() => import("@/components/mars"));

const Mars = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Marscomponent />
    </Suspense>
  );
};

export default memo(Mars);
