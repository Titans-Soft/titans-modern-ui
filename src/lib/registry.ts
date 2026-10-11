import registry from "../../registry.json";

export interface RegistryFile {
  path: string;
  type: "component" | "lib" | "style";
}

export interface RegistryItem {
  name: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  category: "ui" | "titans" | "layout" | "lib";
  dependencies: string[];
  files: RegistryFile[];
  usage: string;
  prompt: string;
}

export function getRegistry(): RegistryItem[] {
  return (registry as { items: RegistryItem[] }).items;
}

export function getRegistryItem(name: string): RegistryItem | undefined {
  return getRegistry().find((i) => i.name === name);
}

export function getRegistryNames(): string[] {
  return getRegistry().map((i) => i.name);
}
