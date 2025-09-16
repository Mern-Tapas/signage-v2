import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import clsx from "clsx";

type AlertDialogContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const AlertDialogContext = createContext<AlertDialogContextType | null>(null);

const useAlertDialog = () => {
  const ctx = useContext(AlertDialogContext);
  if (!ctx) throw new Error("AlertDialog components must be used within <AlertDialog>");
  return ctx;
};

// Root wrapper
export const AlertDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// Trigger
export const AlertDialogTrigger = ({ children }: { children: React.ReactNode }) => {
  const { setOpen } = useAlertDialog();
  return (
    <div onClick={() => setOpen(true)} className="inline-block">
      {children}
    </div>
  );
};

// Content (modal body)
export const AlertDialogContent = ({
  children,
  className,
  maxWidth = "max-w-md",
}: {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}) => {
  const { open, setOpen } = useAlertDialog();
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

// Header wrapper
export const AlertDialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
);

// Title
export const AlertDialogTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
    {children}
  </h2>
);

// Description
export const AlertDialogDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{children}</p>
);

// Footer (buttons)
export const AlertDialogFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 flex justify-end gap-3">{children}</div>
);

// Cancel button
export const AlertDialogCancel = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const { setOpen } = useAlertDialog();
  return (
    <button
      onClick={() => {
        onClick?.();
        setOpen(false);
      }}
      className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {children}
    </button>
  );
};

// Action button
export const AlertDialogAction = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const { setOpen } = useAlertDialog();
  return (
    <button
      onClick={() => {
        onClick?.();
        setOpen(false);
      }}
      className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
    >
      {children}
    </button>
  );
};
