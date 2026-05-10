# Project: Press Room

Mathematical guide component library and visualization framework built with Vite + React + TypeScript + KaTeX.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (typecheck + vite build)
- `npm run typecheck` — TypeScript type checking only

## Architecture

- `src/components/` — Design system components (Masthead, DefinitionCard, TheoremBlock, etc.)
- `src/styles/` — Global styles: tokens.css (OKLCH design tokens), reset.css, global.css, math.css
- `src/guides/` — Guide pages built with the component library
- `src/main.tsx` — App entry point

## Design System: Press Room

- Register: brand (design IS the product)
- Color strategy: Restrained (Parchment base, Ember marginalia ≤10%, Moss confirms, Gilt labels, Slate-Blue annotates)
- Theme: Warm light (parchment, warm undertones)
- Font stack: Fraunces (display/body/variants) + JetBrains Mono (labels/mono)
- Math: KaTeX with custom overrides for Press Room integration

## Key Decisions

- Object types have distinct visual grammar: Theorem = Ink slab, Definition = Paper card, Intuition = Gilt tint, Example = Moss tint, Proof sketch = dashed border
- Shadows reduced in favor of solid color fills for object differentiation
- Definition cards use 1px Rule border, no box-shadow
- Theorem blocks use solid Ink background, no ::before offset pseudo-element
- OKLCH color tokens throughout
- CSS custom properties for theming