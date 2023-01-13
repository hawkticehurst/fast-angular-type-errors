# FAST Angular v15 Type Errors

This is a small reproduction demonstrating type errors that are occuring in FAST inside a Angular v15 application.

This reproduction uses the Webview UI Toolkit for VS Code web components which are currently built with FAST Element (v1.6.2) and FAST Foundation (v2.38.0).

## Reproduce the error

To reproduce the error:

- Clone this repo
- Run `npm install`
- Run `npm run build`
- See errors

## To fix the errors

- Go to: `node_modules/@microsoft/fast-foundation/dist/fast-foundation.d.ts`
- Go to lines 2252, 2254, and 2256
- Change the `create<T>` function type definition to extend `string | number | boolean | symbol | any[] | Uint8Array | ({ createCSS?(): string; } & Record<PropertyKey, any>) | null`
- Run `npm run build`
- No errors! 🎊

For convience, feel free to copy-pasta these 3 lines with the ones at 2252, 2254, and 2256:

```ts
declare function create<T extends string | number | boolean | symbol | any[] | Uint8Array | ({ createCSS?(): string; } & Record<PropertyKey, any>) | null>(nameOrConfig: string): CSSDesignToken<T>;

declare function create<T extends string | number | boolean | symbol | any[] | Uint8Array | ({ createCSS?(): string; } & Record<PropertyKey, any>) | null>(nameOrConfig: Omit<DesignTokenConfiguration, "cssCustomPropertyName"> | (DesignTokenConfiguration & Record<"cssCustomPropertyName", string>)): CSSDesignToken<T>;

declare function create<T extends string | number | boolean | symbol | any[] | Uint8Array | ({ createCSS?(): string; } & Record<PropertyKey, any>) | null>(nameOrConfig: DesignTokenConfiguration & Record<"cssCustomPropertyName", null>): DesignToken<T>;
```
