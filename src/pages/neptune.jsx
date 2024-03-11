import Loading from "@/components/Loading";
import { Suspense, lazy, memo } from "react";

const Neptunecomponent = lazy(() => import("@/components/neptune"));

const Neptune = () => {
  return (
    <Suspense fallback={<div></div>}>
    <Neptunecomponent />
    </Suspense>
  );
};

export default memo(Neptune);
