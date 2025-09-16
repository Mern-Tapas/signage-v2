import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import clsx from "clsx";

type DropdownContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdown = () => {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("Dropdown components must be used within <Dropdown>");
  return ctx;
};

export const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className="relative inline-block text-left">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger = ({ children }: { children: React.ReactNode }) => {
  const { setOpen, open } = useDropdown();
  return (
    <div onClick={() => setOpen(!open)} className="cursor-pointer select-none">
      {children}
    </div>
  );
};

export const DropdownContent = ({
  children,
  align = "left",
  className,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}) => {
  const { open } = useDropdown();
  if (!open) return null;
  return (
    <div
      className={clsx(
        "absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black/10 dark:ring-white/10 z-50 animate-in fade-in-80 slide-in-from-top-2",
        align === "right" ? "right-0" : "left-0",
        className
      )}
    >
      <div className="py-1">{children}</div>
    </div>
  );
};

export const DropdownItem = ({
  children,
  onClick,
  danger,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}) => {
  const { setOpen } = useDropdown();
  return (
    <div
      onClick={() => {
        onClick?.();
        setOpen(false);
      }}
      className={clsx(
        "px-4 py-2 text-sm cursor-pointer select-none rounded-md",
        danger
          ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-600/20"
          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      )}
    >
      {children}
    </div>
  );
};
