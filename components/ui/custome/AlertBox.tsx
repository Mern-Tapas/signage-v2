import React, { useState } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { Button } from "./Button";

type AlertBoxProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
};

export const AlertBox = ({ open, onClose, children, maxWidth = "450px" }: AlertBoxProps) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <div
        className={clsx(
          "relative z-10 rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg transition-all",
        )}
        style={{ maxWidth, width: "100%" }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export const AlertBoxHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-3">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
      {children}
    </h2>
  </div>
);

export const AlertBoxDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-600 dark:text-gray-300">{children}</p>
);

export const AlertBoxFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 flex justify-end gap-3">{children}</div>
);

export const useAlertBox = () => {
  const [open, setOpen] = useState(false);
  return {
    open,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
  };
};
