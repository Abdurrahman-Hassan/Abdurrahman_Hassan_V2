import React, { memo, useEffect, lazy, Suspense } from "react";
import { useRouter } from "next/router";

const Earth = lazy(() => import("@/components/Earth"));
import Loading from "@/components/Loading";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const handleWheel = (event) => {
      const scrollDirection = event.deltaY > 0 ? "down" : "up";
      if (scrollDirection === "down") {
        router.push("/mars");
      } else if (scrollDirection === "up") {
        router.push("/venus");
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });

  return (
    <div className="awesome">
      <div>
        {" "}
        <Suspense fallback={<Loading />}>
          {" "}
          <Earth />
        </Suspense>
      </div>
    </div>
  );
};
export default memo(Home);
