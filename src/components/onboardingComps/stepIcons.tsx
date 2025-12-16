import { ReactNode } from "react";
type iconsType = {
  icon: ReactNode;
  active?: boolean;
};

export function StepIcon({ icon, active }: iconsType) {
  return (
    <div
      className={`rounded-full p-2 border-2 transition-all duration-200
        ${
          active
            ? "bg-lux-dark border-lux-dark text-white"
            : "bg-lux-gray border-lux-gray text-lux-dark"
        }
      `}
    >
      {icon}
    </div>
  );
}
