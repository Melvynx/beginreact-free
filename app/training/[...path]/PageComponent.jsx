import { ErrorBoundaries } from "@/src/utils/ErrorBoundaries";
import dynamic from "next/dynamic";

export const PageComponent = ({ fullPath }) => {
  const RenderedComponent = dynamic(() => import(`./${fullPath}`), {
    ssr: false,
    loading: () => (
      <span className="loading loading-infinity loading-lg"></span>
    ),
  });

  return (
    <ErrorBoundaries>
      <RenderedComponent />
    </ErrorBoundaries>
  );
};
