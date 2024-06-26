"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="card m-auto w-96 bg-base-200 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Path not found</h2>
        <p>L'URL semble être incorrecte.</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
