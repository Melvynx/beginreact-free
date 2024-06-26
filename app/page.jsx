import { LessonButton } from "@/src/components/LessonBouton";
import fs from "fs";
import path from "path";

const trainingDirectory = path.join(process.cwd(), "app/training/[...path]");

const getTrainingTree = (directory) => {
  const tree = {};

  const items = fs.readdirSync(directory);
  for (const item of items) {
    const itemPath = path.join(directory, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();
    if (isDirectory) {
      tree[item] = getTrainingTree(itemPath);
    } else {
      tree[item] = "file";
    }
  }
  return tree;
};

export default function Home() {
  const trainingTree = getTrainingTree(trainingDirectory);
  return (
    <main className="my-8 flex flex-col items-center gap-6">
      <h3 className="text-3xl font-bold">Exercices</h3>

      {Object.entries(trainingTree).map(([typeKey, value]) => {
        if (value === "file") return;
        if (typeKey === "solutions") return;
        return (
          <div
            key={typeKey}
            className="grid w-full max-w-xl grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {Object.entries(value).map(([moduleKey, value]) => {
              return (
                <div
                  key={moduleKey}
                  className="card mx-auto h-fit w-full flex-col items-center overflow-hidden border border-neutral-content/20 bg-base-300 p-0 shadow-xl lg:max-w-sm"
                >
                  <div className="w-full bg-base-100 px-8 py-6">
                    <h3 className="card-title">{moduleKey}</h3>
                  </div>
                  <div className="card-body flex  w-full flex-col items-center gap-2">
                    {Object.entries(value)
                      .sort(([a], [b]) => {
                        return parseInt(a) - parseInt(b);
                      })
                      .map(([lessonKey]) => {
                        return (
                          <LessonButton
                            key={lessonKey}
                            typeKey={typeKey}
                            moduleKey={moduleKey}
                            lessonKey={lessonKey}
                          />
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </main>
  );
}
