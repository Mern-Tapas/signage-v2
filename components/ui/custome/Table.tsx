import React from "react";
import clsx from "clsx";

// 🔹 Props
type TableVariant = "default" | "bordered" | "striped";
type TableSize = "sm" | "md" | "lg";

interface TableProps {
  children: React.ReactNode;
  variant?: TableVariant;
  size?: TableSize;
  className?: string;
}

const sizeClasses: Record<TableSize, string> = {
  sm: "text-xs py-2 px-2",
  md: "text-sm py-3 px-3",
  lg: "text-base py-4 px-4",
};

export const Table: React.FC<TableProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
}) => {
  return (
    <div className="overflow-x-auto w-full">
      <table
        className={clsx(
          "w-full border-collapse",
          variant === "bordered" && "border border-gray-200 dark:border-gray-700",
          className
        )}
      >
        {children}
      </table>
    </div>
  );
};

// 🔹 TableHeader (thead)
export const TableHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <thead className={clsx("bg-gray-50 dark:bg-gray-800", className)}>{children}</thead>
);

// 🔹 TableBody (tbody)
export const TableBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <tbody className={clsx("divide-y divide-gray-100 dark:divide-gray-700", className)}>{children}</tbody>;

// 🔹 TableRow (tr)
export const TableRow: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}> = ({ children, className, hover = true }) => (
  <tr
    className={clsx(
      hover && "hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors",
      className
    )}
  >
    {children}
  </tr>
);

// 🔹 TableHead (th)
export const TableHead: React.FC<{ children: React.ReactNode; className?: string; size?: TableSize }> = ({
  children,
  className,
  size = "md",
}) => (
  <th
    className={clsx(
      "text-left font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700",
      sizeClasses[size],
      className
    )}
  >
    {children}
  </th>
);

// 🔹 TableCell (td)
export const TableCell: React.FC<{ children: React.ReactNode; className?: string; size?: TableSize }> = ({
  children,
  className,
  size = "md",
}) => (
  <td
    className={clsx(
      "text-gray-900 dark:text-gray-100",
      sizeClasses[size],
      className
    )}
  >
    {children}
  </td>
);
