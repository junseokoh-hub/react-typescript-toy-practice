import React, { useEffect } from "react";
import { ListType } from "./App";

interface AlertProps {
  type: string;
  msg: string;
  removeAlert: () => void;
  list: ListType[];
}

const Alert: React.FC<AlertProps> = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <p
      className={`mb-4 h-5 grid items-center text-center text-xs rounded-md tracking-widest capitalize alert-${
        type === "danger"
          ? "text-[#721c24] bg-[#f8d7da]"
          : type === "success"
          ? "text-[#155724] bg-[#d4edda]"
          : null
      }`}
    >
      {msg}
    </p>
  );
};

export default Alert;
