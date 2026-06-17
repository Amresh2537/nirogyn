declare module "marked" {
  export const marked: {
    setOptions: (options: Record<string, unknown>) => void;
    parse: (content: string) => string;
  };
}

declare module "turndown" {
  export default class TurndownService {
    constructor(options?: Record<string, unknown>);
    use(plugin: unknown): void;
    turndown(content: string): string;
  }
}

declare module "turndown-plugin-gfm" {
  export function gfm(service: unknown): void;
}
