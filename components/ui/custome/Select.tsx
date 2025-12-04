import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import clsx from "clsx";

type SelectSize = "sm" | "md" | "lg";

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  size?: SelectSize;
  className?: string;
  disabled?: boolean;
}

const sizeClasses: Record<SelectSize, string> = {
  sm: "h-8 text-sm px-2",
  md: "h-10 text-base px-3",
  lg: "h-12 text-lg px-4",
};

export const Select: React.FC<SelectProps> = ({
  label,
  helperText,
  placeholder = "Select an option...",
  options,
  value,
  onChange,
  size = "md",
  className,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full gap-1">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      {/* Wrapper */}
      <div className="relative w-full">
        <button
          disabled={disabled}
          onClick={() => !disabled && setOpen((prev) => !prev)}
          className={clsx(
            "w-full flex items-center justify-between rounded-md border bg-white dark:bg-gray-900",
            "border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500",
            "transition-all",
            sizeClasses[size],
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          <span className="truncate">
            {value
              ? options.find((o) => o.value === value)?.label
              : placeholder}
          </span>
          <ChevronDown size={18} className="text-gray-500" />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute left-0 mt-1 w-full z-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2">
            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full mb-2 px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm focus:ring-2 focus:ring-blue-500"
            />

            {/* Options */}
            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => (
                  <div
                    key={opt.value}
                    onClick={() => {
                      onChange?.(opt.value);
                      setOpen(false);
                      setSearch("");
                    }}
                    className={clsx(
                      "flex items-center justify-between cursor-pointer px-3 py-2 rounded-md text-sm",
                      "hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <span>{opt.label}</span>
                    {value === opt.value && (
                      <Check size={16} className="text-blue-500" />
                    )}
                  </div>
                ))
              ) : (
                <p className="text-center text-sm text-gray-500 py-2">No results</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Helper Text */}
      {helperText && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
};
