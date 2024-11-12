import React, { useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from React Router
import "./LandingPage.css";
import classNames from "classnames";

function LandingPage() {
  const navigate = useNavigate(); // Replace useRouter with useNavigate
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
      // Use React Router's navigate instead of Next.js's router.push
      navigate("/task-input");
    });
  }

  return (
    <div className={classNames("landing-page")}>
      <div className="text-content">
        <div className="buttons-content">
          <button
            className={classNames({ "end-position": !buttonless })}
            disabled={isPending} // disable button while transition is pending
            onClick={handleTaskManagerClick}
          >
            {isPending ? "Loading..." : "Task Manager"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
