import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "./code-block";
import { cn } from "@/lib/utils";

/**
 * ComponentPreview — docs primitive: live preview + code side by side.
 * Keeps demos copy-pasteable and agent-scrapable (code in <pre>).
 */
export function ComponentPreview({
  preview,
  code,
  prompt,
  className,
}: {
  preview: React.ReactNode;
  code: string;
  prompt?: string;
  className?: string;
}) {
  return (
    <Tabs defaultValue="preview" className={cn("w-full", className)}>
      <TabsList className="mb-3">
        <TabsTrigger value="preview">معاينة</TabsTrigger>
        <TabsTrigger value="code">الكود</TabsTrigger>
        {prompt && <TabsTrigger value="prompt">برومبت AI</TabsTrigger>}
      </TabsList>
      <TabsContent value="preview">
        <div className="rounded-xl border bg-background p-6">{preview}</div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={code} />
      </TabsContent>
      {prompt && (
        <TabsContent value="prompt">
          <CodeBlock code={prompt} lang="md" />
        </TabsContent>
      )}
    </Tabs>
  );
}
