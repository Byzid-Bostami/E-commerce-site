// src/components/PageLoader.jsx
import React, { useEffect, useState } from "react";
import BounceLoader  from "react-spinners/BounceLoader";
import { useLocation } from "react-router-dom";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-100">
        <BounceLoader  color="#f70505" size={60} />
      </div>
    )
  );
};

export default PageLoader;
