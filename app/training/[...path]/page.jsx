import { MarkAsDone } from "@/src/components/MarkAsDone";
import fs from "fs/promises";
import Link from "next/link";
import path from "path";
import { Instruction } from "../../../src/components/Instruction";
import { PageComponent } from "./PageComponent";

export async function generateMetadata({ params }) {
  return {
    title: `Training - ${params.path[1]} - ${params.path[2]}`,
  };
}

export default async function Page({ params }) {
  const fullPath = params.path.join("/");

  if (fullPath.endsWith(".instructions")) {
    return <div>Not found</div>;
  }

  const currentExercice =
    params.path[0] === "exercices"
      ? params.path[2].replace(".jsx", "")
      : params.path[2].split(".")[0];

  const currentPath = path.join(
    process.cwd(),
    `app/training/[...path]/${fullPath}`
  );

  const solutions = await fs.readdir(
    path.join(
      process.cwd(),
      `app/training/[...path]/solutions/${params.path[1]}`
    )
  );

  const currentSolution = solutions
    .filter((s) => s.startsWith(currentExercice))
    .filter((s) => s.endsWith(".jsx"))
    .map((s) => s.replace(".jsx", ""));

  await fs.access(currentPath);

  const type = params.path[0];
  const moduleName = params.path[1];
  const exerciseNumber = params.path[2];

  return (
    <div className="relative flex gap-2">
      <TrainingContent
        moduleName={moduleName}
        exerciseNumber={exerciseNumber}
      />
      <div className="mx-auto max-w-4xl flex-1 px-4">
        <header className="my-4 flex items-center gap-4">
          <h2 className="mr-auto  font-mono text-xs font-bold lg:text-lg">
            {type} - {moduleName} - {exerciseNumber}
          </h2>

          <MarkAsDone value={`${moduleName}/${currentExercice}`}>
            Done
          </MarkAsDone>

          <div className="dropdown dropdown-end">
            <div tabIndex={1} className="btn btn-outline btn-sm m-1">
              Solutions
            </div>
            <ul
              tabIndex={1}
              className="menu dropdown-content z-[1] w-52 rounded-box bg-base-200 p-2 shadow"
            >
              <li>
                <Link
                  href={`/training/exercices/${moduleName}/${currentExercice}.jsx`}
                >
                  Exercice
                </Link>
              </li>
              {currentSolution.map((s) => (
                <li key={s}>
                  <Link href={`/training/solutions/${moduleName}/${s}.jsx`}>
                    Solution {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <div className="rounded-md border border-dashed border-accent p-4">
          <PageComponent fullPath={fullPath} />
        </div>
      </div>
    </div>
  );
}

const TrainingContent = async ({ moduleName, exerciseNumber }) => {
  try {
    const trainingDirectory = path.join(
      process.cwd(),
      `app/instructions/${moduleName}`
    );
    const pth = path.join(
      trainingDirectory,
      `${exerciseNumber.replace(".jsx", "")}.md`
    );

    const instruction = await fs.readFile(pth, "utf-8");

    return <Instruction instruction={instruction} />;
  } catch {
    return null;
  }
};
