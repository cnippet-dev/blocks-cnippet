import { Registry } from "./schema";
import { section } from "./registry-section";
import { sections } from "./registry-sections";

export const registry = [...section, ...sections];
