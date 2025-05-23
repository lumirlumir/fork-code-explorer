import * as React from "react";

import { cn } from "@/lib/utils";

export type TextFieldProps = Exclude<
	React.InputHTMLAttributes<HTMLInputElement>,
	"type"
>;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
	({ className, ...props }, ref) => {
		return (
			<input
				type="text"
				className={cn(
					"flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
TextField.displayName = "TextField";

export { TextField };
