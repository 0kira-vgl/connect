import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {};

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="text-blue hover:bg-blue flex h-12 w-full cursor-pointer items-center justify-between rounded-xl bg-gray-500 px-5 font-semibold transition-colors duration-200 hover:text-gray-900"
      {...props}
    />
  );
}
