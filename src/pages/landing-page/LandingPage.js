"use client";
import { useRouter } from 'next/navigation'; 
import React, { useEffect, useState, useTransition } from "react";
import "./LandingPage.css";
import classNames from "classnames";

function LandingPage() {
  const router = useRouter();
  const [buttonless, setButtonless] = useState(true);
  const [unloading, setUnloading] = useState(false);
  const [isPending, startTransition] = useTransition(); // new transition state

  useEffect(function () {
    setButtonless(false);
  }, []);

  useEffect(() => {
    if (unloading) {
      setButtonless(true);
    }
  }, [unloading]);

  function handleTaskManagerClick() {
    setUnloading(true);
    startTransition(() => {
        router.push("/task-manager");
    });
  }

  return (
    <div className={classNames("landing-page")}>
      <div className="text-content">
        <div className="buttons-content">
          <button
            className={classNames({ "end-position": !buttonless })}
            disabled={isPending} // disable button while transition is pending
            onClick={handleTaskManagerClick}>
            {isPending ? "Loading..." : "Task Manager"}
            Task Manager
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
