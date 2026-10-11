import * as React from "react";
import { cn } from "@/lib/utils";
import { PageHeader } from "./page-header";

export interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

/**
 * DashboardShell — opinionated Arabic dashboard container:
 * PageHeader + responsive content grid. Copy-paste starter.
 */
export function DashboardShell({ title, description, actions, className, children, ...props }: DashboardShellProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl space-y-6 p-4 md:p-6", className)} {...props}>
      <PageHeader title={title} description={description} actions={actions} />
      {children}
    </div>
  );
}
