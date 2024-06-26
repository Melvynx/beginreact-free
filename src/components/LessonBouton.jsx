"use client";

import Link from "next/link";
import { cn } from "../utils/cn";
import { useLocalStorageState } from "../utils/useLocalStorage";

export const LessonButton = (props) => {
  const key = `${props.moduleKey}/${props.lessonKey.replace(".jsx", "")}`;
  const [state] = useLocalStorageState("lesson-progress", {});

  const isFinsihed = state[key];

  return (
    <Link
      href={`/training/${props.typeKey}/${props.moduleKey}/${props.lessonKey}`}
      className={cn("btn w-full btn-neutral", {
        "btn-success": isFinsihed,
      })}
      key={props.lessonKey}
    >
      {props.lessonKey}
    </Link>
  );
};
