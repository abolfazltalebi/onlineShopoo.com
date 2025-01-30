import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant, ...props }: ButtonProps) {
  const variantClass = variant ? checkVariant(variant) : "";
  console.log(checkVariant(variant));
  return (
    <button className={variantClass} {...props}>
      {children}
    </button>
  );
}

function checkVariant(variant: "primary" | "secondary") {
  if (variant === "primary") {
    return "bg-amber-400 px-4 py-2 rounded-xl text-sm";
  }
  if (variant === "secondary") {
    return "bg-amber-200 px-4 py-2 rounded-xl text-sm";
  }
  return "";
}
