"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import clsx from "clsx";

type DrawerSide = "left" | "right" | "top" | "bottom";
type DrawerSize = "sm" | "md" | "lg" | "full";

interface DrawerContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const DrawerContext = createContext<DrawerContextValue | null>(null);

function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("Drawer components must be used inside <Drawer />");
  return ctx;
}

/* -------------------------------- Root -------------------------------- */

interface DrawerProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Drawer({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
}: DrawerProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;

  const isOpen = isControlled ? open : internalOpen;

  const setOpen = (v: boolean) => {
    if (!isControlled) setInternalOpen(v);
    onOpenChange?.(v);
  };

  // ESC close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <DrawerContext.Provider value={{ open: isOpen, setOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

/* -------------------------------- Trigger -------------------------------- */

export function DrawerTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setOpen } = useDrawer();
  return <div onClick={() => setOpen(true)}>{children}</div>;
}

/* -------------------------------- Overlay -------------------------------- */

export function DrawerOverlay() {
  const { open, setOpen } = useDrawer();

  return (
    <div
      onClick={() => setOpen(false)}
      className={clsx(
        "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-40 ",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    />
  );
}

/* -------------------------------- Content -------------------------------- */

interface DrawerContentProps {
  side?: DrawerSide;
  size?: DrawerSize;
  className?: string;
  children: React.ReactNode;
}

export function DrawerContent({
  side = "right",
  size = "md",
  className,
  children,
}: DrawerContentProps) {
  const { open } = useDrawer();

  const sizeMap = {
    sm: "w-64",
    md: "w-96",
    lg: "w-[32rem]",
    full: "w-screen",
  };

  const positionMap = {
    right: "right-0 top-0 h-full",
    left: "left-0 top-0 h-full",
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
  };

  const transformMap = {
    right: open ? "translate-x-0" : "translate-x-full",
    left: open ? "translate-x-0" : "-translate-x-full",
    top: open ? "translate-y-0" : "-translate-y-full",
    bottom: open ? "translate-y-0" : "translate-y-full",
  };

  return (
    <div
      className={clsx(
        "fixed z-50 bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-out",
        side === "left" || side === "right" ? sizeMap[size] : "h-auto",
        positionMap[side],
        transformMap[side],
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------- Header -------------------------------- */

export function DrawerHeader({
  title,
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={clsx("p-4 border-b border-gray-200 dark:border-gray-800", className)}>
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}
    </div>
  );
}

/* -------------------------------- Body -------------------------------- */

export function DrawerBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx("p-4 overflow-y-auto", className)}>{children}</div>;
}

/* -------------------------------- Footer -------------------------------- */

export function DrawerFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("p-4 border-t border-gray-200 dark:border-gray-800", className)}>
      {children}
    </div>
  );
}
