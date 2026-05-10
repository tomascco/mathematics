---
name: Press Room
description: A letterpress-mathematics design system for scholarly guides and interactive visualizations
colors:
  ember: "#c44536"
  ember-text: oklch(45% 0.17 27)
  moss: "#2d5d3d"
  gilt: oklch(62% 0.12 85)
  gilt-text: oklch(42% 0.10 85)
  slate-blue: oklch(44% 0.10 265)
  ink: "#1a1612"
  parchment: "#f5f1ea"
  paper: "#fbf8f3"
  soft: "#e8e1d4"
  muted: oklch(42% 0.02 60)
  rule: "#2a221c"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 9vw, 7rem)"
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariationSettings: '"opsz" 144'
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariationSettings: '"opsz" 144'
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.25em"
    textTransform: uppercase
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.8
  math:
    fontFamily: "KaTeX_Main, Times New Roman, serif"
    fontSize: "1em"
    lineHeight: 1.2
rounded:
  none: "0px"
  sm: "2px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "90px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
  button-primary-hover:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  definition-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px 32px"
  theorem-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "32px 36px"
  intuition-box:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "22px 28px"
---

# Design System: Press Room

## 1. Overview

**Creative North Star: "The Press Room"**

Ink on paper where color IS the shape. Every surface is printed, stamped, or ruled. The system prioritizes solid color fills and background differentiation over shadow depth: a theorem block is an Ink slab, a definition sits on Paper, an intuition box carries a Gilt tint. Shadows are used sparingly and structurally, never as the primary differentiator. Color arrives as marginalia: a red stamp, a gold label, a green proof mark. The system treats mathematical content as typeset matter: definitions, theorems, examples, and interactions are distinct typographic objects, each with its own physical affordance, not just a different background color on the same card template.

The Press Room rejects SaaS sterility, Wikipedia flatness, and tutoring-platform friendliness. It rejects the editorial-typographic monoculture (Fraunces italic + mono labels + ruled columns) as a reflex, not as an enemy. The system retains serif warmth and monospaced labels but earns them through structural differentiation: objects have distinct shapes, not just different left-border colors. Solid fills, stamped labels, and background contrast make the page feel composed on a physical press.

Key characteristics:
- Solid color fills carry object differentiation: Ink slab for theorems, Paper for definitions, Gilt tint for intuition, Moss tint for examples
- Shadows are secondary structure, not primary differentiators. Definition cards use borders, not shadows. Theorem blocks use solid backgrounds, not offset pseudo-elements.
- Every mathematical object type (theorem, definition, lemma, example, intuition, algorithm) has a distinct visual grammar
- Color is marginalia, not wallpaper. Ember accents, Moss confirms, Gilt labels, Slate-Blue annotates. Parchment carries.
- Monospaced labels are stamped metadata, not decoration
- Interactive elements recruit the same physical language: active states press in, selected states ink up

## 2. Colors

A warm ink-on-paper palette with four accent voices used as marginalia, never as flood fills.

### Primary
- **Ember** (`#c44536` / oklch(54% 0.17 27)): The red stamp. Theorems, emphasized terms, active states, chapter marks. Appears on ≤10% of any surface. Ember is a voice, not a wash.

### Secondary
- **Moss** (`#2d5d3d` / oklch(42% 0.08 155)): The green proof mark. Normal subgroups, confirmed results, unique Sylows, application numbers. Confirms what is established, never shouts.
- **Gilt** (oklch(62% 0.12 85)): The gold label. Intuition box accents, theorem tags, proof sketch labels. Applied to small marks and short labels, never to large surfaces.
- **Slate-Blue** (oklch(44% 0.10 265)): The blue annotation. Exponents, order cells, secondary mathematical highlights. Annotates without competing with Ember.

### Neutral
- **Ink** (`#1a1612` / oklch(12% 0.02 60)): Primary text, theorem block backgrounds, stamp labels. Warm near-black with a brown undertone, never pure black.
- **Parchment** (`#f5f1ea` / oklch(96% 0.005 80)): Page background. Warm cream with a faint yellow undertone. Never pure white.
- **Paper** (`#fbf8f3` / oklch(98% 0.004 80)): Elevated surfaces: definition cards, panels, footer. One shade lighter than Parchment, used for physical layering.
- **Soft** (`#e8e1d4` / oklch(90% 0.008 75)): Subtle backgrounds, button hover states, inline code. Warm gray without purple or blue undertones.
- **Muted** (oklch(42% 0.02 60)): Secondary text, meta labels, caption text. Brown-muted, not gray-muted.
- **Rule** (`#2a221c` / oklch(16% 0.02 60)): Borders, rules, separator lines. Darker than Ink is allowed to be; warm and present rather than thin and absent.

### Named Rules

**The Marginalia Rule.** Accent colors are marginalia, not surfaces. Ember on ≤10% of any surface. Gilt and Slate-Blue on labels and annotations. Moss on confirmations. The background is always a neutral, never an accent.

**The Warm Undertone Rule.** Every neutral is tinted toward hue 60 (warm brown-amber). No pure grays, no blue-grays, no cool undertones. Cool mathematics deserves warm paper.

## 3. Typography

**Display Font:** Fraunces (variable, with optical size axis `opsz` 9--144) with Georgia fallback
**Body Font:** Fraunces (same family, narrower weight range)
**Label / Mono Font:** JetBrains Mono (with `ui-monospace` / system monospace fallback)

**Math Font:** KaTeX (LaTeX-quality rendering via MathJax or KaTeX) with custom CSS overrides for Press Room integration

**Character:** A scholarly serif with an optical-size axis that tightens at display sizes and loosens at body text. JetBrains Mono provides the counterpoint: stamped metadata labels in small caps, monospaced tables and factorization displays. The pairing feels like printed marginalia alongside typeset prose. Mathematics typesetting shares the same typographic authority as the prose: equations are composed, not pasted in.

### Hierarchy
- **Display** (Fraunces weight 300, `clamp(2.5rem, 9vw, 7rem)`, line-height 0.92, letter-spacing -0.04em, opsz 144): Masthead titles only. Extreme weight contrast against body.
- **Headline** (Fraunces weight 400, `clamp(2rem, 5vw, 3.25rem)`, line-height 1.05, letter-spacing -0.025em, opsz 144): Section headings h2. Italic accent words in Ember.
- **Title** (Fraunces weight 500, 1.5rem, line-height 1.3, letter-spacing -0.01em): Subsection headings h3.
- **Body** (Fraunces weight 400, 1.0625rem, line-height 1.65, max-width 65--75ch): Prose paragraphs, lede paragraphs at 1.375rem italic in Muted.
- **Label** (JetBrains Mono weight 700, 0.6875rem, letter-spacing 0.25em, uppercase): Chapter marks, definition tags, theorem tags, column headers, proof sketch labels. Stamped metadata, always uppercase, always track-spaced.
- **Mono** (JetBrains Mono weight 500, 0.875rem, line-height 1.8): Factorization displays, table cells, inline code, interactive picker buttons.
- **Math** (KaTeX/MaTeX default, 1em, line-height 1.2 inline / centered block with 12px vertical margin): All mathematical notation. Inline math aligns to the x-height and baseline of surrounding Body text, never floating above or sinking below. Display math sits in its own centered block with vertical breathing room.

### Named Rules

**The Stamped Label Rule.** Every structural label (chapter mark, definition tag, theorem tag, intuition tag, proof sketch tag) is set in JetBrains Mono 0.6875rem weight 700 with 0.2--0.3em letter-spacing in uppercase. It is a rubber stamp, not quiet caption text.

**The Scale Contrast Rule.** The ratio between Display and Body is ≥6.5:1 in font-size. The ratio between Headline and Title is ≥1.3:1. Flat scales produce template pages; steep scales produce composed pages.

**The Composed Math Rule.** Equations are first-class typographic citizens, not foreign objects pasted into prose. Inline math must sit on the text baseline at x-height, aligned with Fraunces body text. Display math must be vertically spaced with the same rhythm as paragraph breaks (12px margin top/bottom), centered, and never cramped against surrounding prose. No pixelated bitmaps, no misaligned fractions, no cramped operators. Math font size matches Body at 1em; never scale math down to "fit."

## 4. Elevation

The Press Room uses elevation sparingly. Solid background fills and border treatments carry the primary differentiation between object types. Shadows are secondary structure, used only where they signal physical layering.

### Shadow Vocabulary
- **Definition card**: 1px Rule border, no shadow. The Paper-on-Parchment background contrast differentiates.
- **Interactive panel**: 1px Rule border, optional subtle stamp shadow (`3px 3px 0 rgba(26,22,18,0.06)`) for depth on hover/focus states only.
- **Theorem block**: Solid Ink background, no offset pseudo-element. The background contrast is the differentiator.
- **Application card**: 1px Rule border + Moss left accent bar (structural identity, 1px max, not decorative stripe).

### Named Rules

**The Shadow-Secondary Rule.** Shadows are secondary to solid fills and border treatments. Definition cards use borders, not shadows. Theorem blocks use solid backgrounds, not offset pseudo-elements. No `box-shadow` with a blur radius greater than 0. If depth is needed, use a subtle hard offset with reduced opacity, never diffuse blur.

**The Flat-By-Default Rule.** The base surface (Parchment) carries no shadow. Object differentiation comes from background fill contrast (Ink vs Paper vs tinted gradients), border style (solid vs dashed), and label color. Running prose and paragraph text are flat.

## 5. Components

Every component below is a distinct typographic object for a mathematical content type. They are not interchangeable card variants; they serve different pedagogical roles.

### Masthead
Double-rule bottom border (3px double). Paper background. Three rows: meta (mono label line), title (Display, Ember italic accents), subtitle (italic Muted). Chapter marks in the meta row use the Stamped Label Rule.

### Definition Card
Paper background, 1px Rule border, no shadow. Offset tag label (absolute positioned, -11px top, Ember-on-Ink or Moss-on-Paper) identifying the definition number and type. Title in Fraunces italic at Title size in Ember. Body text in Body. Unbounded line length for definition content (no max-width). Background contrast (Paper on Parchment) differentiates it from surrounding prose.

### Theorem Block
Ink background, Paper text. Solid Ink fills carry the differentiation; no ::before offset pseudo-element. Gilt tag label in Stamped Label style. Italic title in Fraunces 1.625rem. Body in Paper at 1rem. Numbered lists inside have generous bottom margin per item.

### Intuition Box
Diagonal gradient from `rgba(Gilt, 0.08)` to `rgba(Ember, 0.04)` as background. Ink left border at 4px in Gilt. Stamped Label in Gilt reading "INTUITION". Body text in italic, same size as running prose. Placed after definitions to warm up formal content.

### Proof Sketch
Dashed Muted border (1px dashed). Muted label in Stamped Label style reading "PROOF SKETCH" or the specific lemma name. Semi-transparent white background. Running prose, no max-width constraint. The dashed border signals "argument in progress, not final proof."

### Example Box
Moss-tinted background (`rgba(Moss, 0.06)`). Ink left border at 4px in Moss. Stamped Label in Moss. Running prose with unbounded line length. Used for concrete, worked mathematical examples.

### Interactive Panel
Paper background, 1px Rule border. Optional subtle stamp shadow on hover/focus only. Dashed bottom border on the header separating title (Fraunces italic) from tag (mono label). Contains number pickers, table displays, or computation outputs. The dashed header signals "this section contains controls."

### Number Picker
Horizontal flex wrap of JetBrains Mono buttons. Default: Parchment background, Rule border. Hover: Soft background, 1px translate-y shift. Active: Ink background, Paper text, 1px translate-y shift, Ember shadow offset. Active state feels pressed into the surface.

### Sylow Table
Full-width, monospaced. Ink header row. Paper body rows with Soft bottom border separators. Prime cells in Ember bold at larger size. Order cells in Slate-Blue bold. Index cells in Muted. Unique forced cells in Moss bold.

### Application Card
Paper background, 1px Rule border, 3px Moss left border. Numbered circle (32px, Moss background, Paper text, Fraunces italic) absolute-positioned at top. Title in Fraunces italic at 1.25rem, indented past the circle. Running prose.

### Lattice Diagram
Centered SVG container with Parchment background and 1px Rule border. Overflow-x auto for wide diagrams. No decoration beyond the ruled border.

### Table of Contents
Paper background, 1px Rule border. Two-column layout collapsing to one below 700px. Ember chapter numbers in mono. Italic linked headings. Hover reveals Ember underline. The TOC is a navigational object, not decorative.

### Drop Cap
First letter of select paragraphs: Fraunces italic weight 500 at 5em, floated left, Ember color, narrow line-height. Signals the start of a major section.

### Ornament
Centered fleurons (Unicode `❦`) in Ember at 1.375rem, wide letter-spacing. Placed between major sections as visual breathing room, not section dividers.

### Math Rendering
All mathematical notation rendered via KaTeX (preferred for React integration) or MathJax 3 as fallback. Inline math (`$...$`) renders at 1em matching Body font-size, aligned to text baseline and x-height. Display math (`$$...$$`) renders centered in its own block with 12px vertical margin, never cramped. Custom CSS overrides: KaTeX font-size at 1em (never shrunk), vertical spacing matching paragraph rhythm, fraction line weight and operator spacing tuned to pair with Fraunces body metrics. Color-aware: Ember for highlighted terms, Gilt for annotated steps, Slate-Blue for secondary notation. Accessible: every equation carries an `aria-label` or `alttext` equivalent for screen readers. No bitmap fallbacks, no misaligned baselines, no cramped operators.

## 6. Do's and Don'ts

### Do:
- **Do** use solid background fills as the primary differentiator between object types: Ink slab for theorems, Paper for definitions, Gilt tint for intuition, Moss tint for examples.
- **Do** give every mathematical object type (theorem, definition, lemma, proposition, corollary, example, intuition, algorithm) a distinct visual grammar. Shape, border treatment, background, and label style should all signal the object type before the reader reads the label.
- **Do** use hard offset shadows sparingly, only where they signal physical layering. Definition cards use borders, not shadows. Shadows are secondary structure, not primary differentiation.
- **Do** limit Ember to ≤10% of any surface. It is a stamp, not a paint bucket.
- **Do** use JetBrains Mono labels at 0.6875rem / 700 weight / 0.2--0.3em letter-spacing / uppercase for all structural metadata: chapter marks, object tags, column headers, proof labels.
- **Do** maintain warm undertones in all neutrals. Parchment, Paper, Soft, and Muted are tinted toward hue 60 (warm amber-brown). No cool grays, no blue-grays, no pure white (#fff) or pure black (#000).
- **Do** use dashed borders exclusively for proof sketches and panel headers. Dashed = provisional or interactive, solid = established.
- **Do** vary spacing between sections (90px margin) for rhythm. Same padding everywhere produces monotony.
- **Do** cap prose line length at 65--75ch. Mathematical objects (definitions, examples, table cells) may exceed this bound.
- **Do** render all mathematical notation via KaTeX. Inline math at 1em aligned to Body baseline. Display math centered with 12px vertical margin. Every equation carries accessible alt text. No pixelated bitmaps, no baseline misalignment, no shrunk font-size.

### Don't:
- **Don't** use side-stripe borders greater than 1px as a colored accent on cards, list items, callouts, or alerts. The Intuition Box and Example Box use 4px left borders, but these are structural identity marks tied to their object type, not decorative accent stripes. If a new object type needs color differentiation, use background tint, offset tag, or shadow difference, not a color stripe.
- **Don't** use gradient text (`background-clip: text` with gradient). Ember, Gilt, Moss, and Slate-Blue are solid colors. Use weight and size for emphasis.
- **Don't** use glassmorphism (backdrop-blur, semi-transparent backgrounds) as a default surface treatment. Press Room surfaces are opaque: Paper on Parchment, Ink for theorem blocks.
- **Don't** create hero-metric templates (big number, small label, supporting stats, gradient accent). This is a mathematics monograph, not a SaaS dashboard.
- **Don't** use identical card grids. Definition cards, theorem blocks, intuition boxes, and example boxes are distinct objects with distinct visual grammar. They must not collapse into the same box template with a different left-border color.
- **Don't** use modal dialogs as a first thought. Mathematical content should be progressively disclosed inline, not hidden behind overlay triggers.
- **Don't** produce SaaS aesthetics: no rounded corners greater than 2px, no pastel backgrounds, no centered icon-heading-text card grids, no gray-on-white dashboards.
- **Don't** produce Wikipedia-flat aesthetics: no unstyled walls of notation, no sterile reference layouts without visual identity.
- **Don't** produce tutoring-platform aesthetics: no bubbly friendly UI, no gamification badges, no progress bars, no emoji.
- **Don't** use em dashes. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** render math as images, Unicode hacks, or plain-text approximations. No `a^2 + b^2 = c^2` when KaTeX can typeset it properly. No shrunk math font-sizes. No baseline misalignment between inline math and surrounding prose.