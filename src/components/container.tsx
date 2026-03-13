import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return <div className={cn("w-full h-full", className)}>{children}</div>;
};
