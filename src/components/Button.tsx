import { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "../utils/class";

type ButtonProps = ComponentPropsWithRef<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button(props, ref) {
		return (
			<button
				ref={ref}
				{...props}
				className={cn(
					"w-fit py-2 px-3 flex justify-center items-center border-2 border-black font-medium  rounded-md focus:outline-dashed active:outline-none",
					props.className,
				)}
			>
				{props.children}
			</button>
		);
	},
);
