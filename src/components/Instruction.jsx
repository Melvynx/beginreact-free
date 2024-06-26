import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import { InstructionToggle } from "./InstructionToggle";

export const Instruction = ({ instruction }) => {
  return (
    <InstructionToggle>
      <Suspense
        fallback={
          <>
            <p>Loading...</p>
          </>
        }
      >
        <article className="prose">
          <MDXRemote source={instruction} />
        </article>
      </Suspense>
    </InstructionToggle>
  );
};
