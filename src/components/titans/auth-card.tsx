import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  footer?: React.ReactNode;
  logo?: React.ReactNode;
}

/**
 * AuthCard — centered Arabic auth container (login/register/OTP).
 * Place <form> inside children. RTL labels align automatically.
 */
export function AuthCard({ title, description, footer, logo, className, children, ...props }: AuthCardProps) {
  return (
    <div className={cn("mx-auto flex min-h-[60vh] w-full max-w-md flex-col justify-center", className)} {...props}>
      <Card className="shadow-lg">
        <CardHeader className="items-center text-center">
          {logo && <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground text-xl font-black">{logo}</div>}
          <CardTitle className="text-xl">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-4">{children}</CardContent>
        {footer && <div className="border-t px-6 py-4 text-center text-sm text-muted-foreground">{footer}</div>}
      </Card>
    </div>
  );
}
