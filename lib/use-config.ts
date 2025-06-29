import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";


type Config = {
    radius: number;
    packageManager: "npm" | "yarn" | "pnpm" | "bun";
};

const configAtom = atomWithStorage<Config>("config", {
    radius: 0.5,
    packageManager: "pnpm",
});

export function useConfig() {
    return useAtom(configAtom);
}
