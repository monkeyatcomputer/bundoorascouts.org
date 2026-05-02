# Design System Document: Bundoora Scouts

## 1. Overview & Creative North Star
### Creative North Star: "The Modern Trailfinder"
This design system moves away from the rigid, boxy layouts of traditional community websites. Instead, it adopts an editorial, high-end aesthetic that mirrors the adventurous and structured nature of Scouting. We treat the digital canvas as a landscape—using **intentional asymmetry**, **tonal depth**, and **overlapping elements** to guide the user’s eye.

The experience should feel premium yet approachable, replacing "standard" UI patterns with a signature visual language that emphasizes youth education through sophisticated, breathing layouts and authoritative typography.

---

## 2. Colors
Our palette is rooted in the rich heritage of Scouts Australia, interpreted through a modern, material-based hierarchy.

### Tonal Logic
- **Primary (#262661 - Australian Navy):** Used for high-level branding and deep authoritative backgrounds.
- **Secondary (#3D5C92 - Scouts Medium Blue):** Drives the primary action language and interaction states.
- **Tertiary (#008F88 - Scouts Accent Green):** Reserved for environmental accents and section-specific education content.
- **Surface & Background (#808080 / Neutral Base):** Used to generate tonal neutrals that provide a professional, structured feel compared to stark digital white.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. All spatial boundaries must be created through:
1. **Background Color Shifts:** Placing a `surface-container-low` section against a `surface` background.
2. **Tonal Transitions:** Using subtle shifts between neutral tokens to define the edge of a content block.

---

## 3. Typography
We utilize **Nunito Sans** across all roles to provide a clean, neutral, and highly legible foundation that balances friendly approachability with structural clarity.

- **Display (3.5rem - 2.25rem):** Reserved for high-impact marketing headlines. Use intentional asymmetry by pairing left-aligned display text with right-aligned imagery to break the grid.
- **Headline (2rem - 1.5rem):** Used for section starts. Set in **Nunito Sans**, these should be tight in tracking to feel "editorial" and authoritative.
- **Body (1rem - 0.75rem):** Set with generous line height (1.6) to ensure maximum readability for youth and parents.
- **Labels (0.75rem - 0.6875rem):** All-caps with increased letter spacing (0.05rem) for metadata and small categorizations.

---

## 4. Elevation & Depth
In this design system, depth is a product of **Tonal Layering** rather than structural lines.

### The Layering Principle
Think of the UI as stacked sheets of fine material.
- **Base Layer:** `surface`
- **In-Page Sections:** `surface-container-low`
- **Actionable Cards:** `surface-container-lowest`
By nesting a "Lowest" container inside a "Low" section, you create a natural lift that signals interactivity without heavy shadows.

### Ambient Shadows
When an element must "float" (e.g., a critical notification or a mobile nav), use **Ambient Shadows**:
- **Blur:** 40px to 60px.
- **Opacity:** 4% - 8% of the `on-surface` color.
- **Tint:** The shadow should not be grey; it should be a very dark version of the `primary` navy.

---

## 5. Components

### Buttons (The "Trail" CTA)
- **Primary:** Gradient fill (`primary` to `primary_container`), **moderate roundedness** (Level 2), no border.
- **Secondary:** `surface-container-high` background with `on-surface` text.
- **Hover States:** Instead of simple darkening, use a slight "lift" (Ambient Shadow) and a scale-up of 1.02%.

### Cards & Lists
- **Rule:** Forbid divider lines.
- **Execution:** Separate list items using `1.5rem` of vertical white space or by alternating background tints.
- **Corner Radius:** Use **moderate roundedness** (Level 2) for standard cards to maintain a balanced, professional edge.

### Chips (Section Badges)
- Use the vibrant "Section Colors" (Joeys Orange, Cubs Yellow, etc.) as the background for chips.
- **Roundedness:** Though the system uses moderate roundedness, chips may utilize a fuller radius to differentiate from rectangular content blocks.

### Text Inputs
- Forgo the traditional box. Use a "Soft Inset" style: a `surface-container-highest` background with a subtle `outline-variant` ghost border (10% opacity) and standard moderate roundedness (Level 2).

---

## 6. Do's and Don'ts

### Do
- **Do** embrace white space. Use it as a functional element to group related educational concepts.
- **Do** overlap elements. Let a photo of Scouts kayaking "bleed" slightly over a text block to create movement.
- **Do** use the `tertiary` (#008F88) for all nature and outdoor-focused instructional components.

### Don't
- **Don't** use 100% black. Use `on-surface` for all text to keep the aesthetic "soft" and welcoming.
- **Don't** use sharp corners. Every component must use the defined **moderate roundedness** (Level 2) to maintain the "friendly" brand promise.
- **Don't** use standard "drop shadows." If it looks like a default shadow, it’s too heavy.