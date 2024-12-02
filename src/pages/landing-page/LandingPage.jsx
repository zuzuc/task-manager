import React, { useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from React Router
import "./LandingPage.css";
import useIsMobile from "../../hooks/useIsMobile";
import classNames from "classnames";

function LandingPage() {
  const isMobile = useIsMobile();
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
      navigate("/task-manager");
    });
  }

  return (
    <div className={classNames("landing-page", {mobile : isMobile })}>
      <div className="text-content">
        <div className="buttons-content">
          <button
            className={classNames({ "end-position": !buttonless })}
            disabled={isPending} // disable button while transition is pending
            onClick={handleTaskManagerClick}
          >
            {isPending ? "Loading..." : "Manage your tasks"}
          </button>
        </div>
      </div>
      <div
        className={classNames("background-landscape", {
          "end-position": buttonless,
          unloading,
        })}
        style={{ backgroundImage: 'url("/images/landscape-01.jpg")' }}
      ></div>
    </div>
  );
}

export default LandingPage;
