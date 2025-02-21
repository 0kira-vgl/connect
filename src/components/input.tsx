import { ComponentProps } from "react";

type InputRootProps = ComponentProps<"div"> & {
  error?: boolean;
};

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group data-[error=true]:border-danger flex h-12 items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4"
      {...props}
    />
  );
}

type InputIconProps = ComponentProps<"span"> & {};

export function InputIcon({ ...props }: InputIconProps) {
  return (
    <span
      className="group-data-[error=true]:text-danger text-gray-400 group-focus-within:to-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100"
      {...props}
    />
  );
}

type InputFiedlProps = ComponentProps<"input"> & {};

export function InputField({ ...props }: InputFiedlProps) {
  return <input className="flex-1 placeholder-gray-400 outline-0" {...props} />;
}
