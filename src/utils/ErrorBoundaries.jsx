// @ts-nocheck
"use client";

import Link from "next/link";
import { Component } from "react";

export class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI or Text if there is error
      return (
        <div className="card m-auto w-full max-w-96 bg-base-200 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Error</h2>

            <div className="rounded-md bg-base-100 p-4">
              <code className="text-wrap">{this.state.error?.message}</code>
            </div>

            <div className="card-actions justify-end">
              <Link className="btn btn-primary btn-sm" href="/">
                Home
              </Link>
              <button
                onClick={() => {
                  this.setState({
                    hasError: false,
                    error: null,
                  });
                }}
                className="btn btn-secondary btn-sm"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
