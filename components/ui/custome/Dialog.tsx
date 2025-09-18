import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import clsx from "clsx";
import { Button } from "./Button";
import { Caption, Typography } from "@/components/typography/typography";

type DialogContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

const useDialog = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Dialog components must be used within <Dialog>");
  return ctx;
};

// Root wrapper
export const Dialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

// Trigger
export const DialogTrigger = ({ children }: { children: React.ReactNode }) => {
  const { setOpen } = useDialog();
  return (
    <div onClick={() => setOpen(true)} className="inline-block">
      {children}
    </div>
  );
};

// Content (modal body)
export const DialogContent = ({
  children,
  className,
  maxWidth = "max-w-lg",
}: {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}) => {
  const { open, setOpen } = useDialog();
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleClick = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-0">
      <div
        ref={dialogRef}
        className={clsx(
          "bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-full animate-in zoom-in-95 slide-in-from-top-2",
          maxWidth,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

// Header
export const DialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
);

// Title
export const DialogTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
    {children}
  </h2>
);

// Description
export const DialogDescription = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="body2" className="">{children}</Typography >
);

// Body
export const DialogBody = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-2">{children}</div>
);

// Footer
export const DialogFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 flex justify-end gap-3">{children}</div>
);

// Close button (for cancel/back)
export const DialogClose = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const { setOpen } = useDialog();
  return (
    <Button
    variant="secondary"
      onClick={() => {
        onClick?.();
        setOpen(false);
      }}
      className=""
    >
      {children}
    </Button>
  );
};
