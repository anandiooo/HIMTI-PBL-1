# HIMTI Competition Layout Documentation

## HTML Tags
```text
<html>     - The root container that wraps all HTML elements on the page.
<head>     - Defines meta-information, links to CSS styles, and imports dependencies.
<body>     - The main wrapper that contains all the visible content on the webpage.
<section>  - A standalone thematic block of content (e.g., Hero, About, Contact).
<header>   - The top navigation bar area containing the logo and main links.
<nav>      - A semantic container wrapping the primary navigation links.
<div>      - A generic container element used for Flexbox/Grid layouts and grouping.
<footer>   - The bottom section of the page used for copyrights and secondary links.
<h1>       - The primary heading tag, establishing the top typographical hierarchy.
<h2>       - A secondary heading tag for section titles.
<h3>       - A tertiary heading tag used for card titles.
<p>        - Defines a standard paragraph of continuous text.
<b>        - Makes text bold to highlight specific words without altering hierarchy.
<span>     - An inline container allowing subset styling of text without breaking lines.
<form>     - Wraps input elements together for capturing user data.
<input>    - A single-line data entry field, used for name and email blocks.
<textarea> - A multi-line resizable data entry field, used for messages.
<a>        - An anchor text link to navigate to other sections or external websites.
<button>   - An interactive, clickable element for toggling menus or submitting forms.
<img>      - Renders images and graphics sourced from the /public directory.
<svg>      - A scalable vector graphic container used natively for the hamburger icon.
<path>     - Instructions for the browser on how to trace the lines of an SVG graphic.
```

## Tailwind CSS Classes
```text
container           - max-width: 100%; (with breakpoints)        - Sets responsive maximum widths for layout boundaries
mx-auto             - margin-left: auto; margin-right: auto;     - Centers an element horizontally within its parent
flex                - display: flex;                             - Activates a Flexbox layout context
flex-col            - flex-direction: column;                    - Stacks Flexbox children vertically
flex-row            - flex-direction: row;                       - Places Flexbox children horizontally
grid                - display: grid;                             - Activates a CSS Grid layout context
grid-cols-1         - grid-template-columns: repeat(1, ...);     - Sets grid to a single column (Mobile view)
md:grid-cols-3      - @media (min-width: 768px) { grid... }      - Sets the grid to 3 equal columns on tablet+ screens
absolute            - position: absolute;                        - Positions an element relative to its closest relative parent
relative            - position: relative;                        - Positions an element normally, bounds absolute children
fixed               - position: fixed;                           - Locks an element exactly to the current browser viewport
inset-0             - top/right/bottom/left: 0px;                - Stretches an absolute/fixed element to fill all 4 edges
hidden              - display: none;                             - Removes an element completely from the visual flow
md:flex             - @media (min-width: 768px) { display: flex }- Shows an element as a flex container on tablet+ screens
z-10                - z-index: 10;                               - Brings an element physically forward in the stacking order
w-full              - width: 100%;                               - Instructs element to occupy the maximum width available
max-w-[61.8%]       - max-width: 61.8%;                          - Sets an explicit golden-ratio max width on a container
h-[16.18rem]        - height: 16.18rem;                          - Sets an explicit golden-ratio height on an element
min-h-screen        - min-height: 100vh;                         - Forces element to be exactly as tall as the browser viewport
object-contain      - object-fit: contain;                       - Scales an image gracefully without stretching or cropping
items-center        - align-items: center;                       - Centers Flexbox children along the cross-axis
justify-between     - justify-content: space-between;            - Spaces flex children maximizing the gap between them
justify-center      - justify-content: center;                   - Groups flex children tightly in the immediate center
gap-[2.6rem]        - gap: 2.6rem;                               - Adds explicit golden-scaled spacing between grid/flex items
flex-grow           - flex-grow: 1;                              - Allows flex children to expand and fill leftover empty space
px-[1.6rem]         - padding-left: 1.6rem; padding-right: ...   - Adds explicit golden-scaled padding to left and right edges
py-[4.2rem]         - padding-top: 4.2rem; padding-bottom: ...   - Adds explicit golden-scaled padding to top and bottom edges
mt-[6.8rem]         - margin-top: 6.8rem;                        - Pushes the element down by a golden-scaled top margin value
mb-[2.6rem]         - margin-bottom: 2.6rem;                     - Pushes content beneath the element using a golden scale
top-[-5%]           - top: -5%;                                  - Moves a positioned rendering box slightly upwards
-translate-y-full   - transform: translateY(-100%);              - Slides a component physically out of view on the Y axis
font-sans           - font-family: 'Montserrat', sans-serif;     - Asserts the default typography tracking
font-bold           - font-weight: 700;                          - Renders typography utilizing a heavier weight style
text-[1.6rem]       - font-size: 1.6rem;                         - Forces typography explicitly to a golden ratio 16px multiple
leading-[1.618]     - line-height: 1.618;                        - Sets line heights perfectly tracking the golden sequence
text-center         - text-align: center;                        - Centers typography rendering along the horizontal axis
text-brand-primary  - color: #00A3FF;                            - Assigns the primary brand color configuration to typography
bg-white            - background-color: #ffffff;                 - Assigns a pure white background rendering box
bg-brand-dark       - background-color: #0F2C4C;                 - Assigns the dark blue brand background rendering box
rounded-3xl         - border-radius: 1.5rem;                     - Aggressively rounds the sharp corners of an element box
shadow-lg           - box-shadow: ... rgba(0,0,0,0.1);           - Appends a generic 2D dropshadow mapping logic
opacity-0           - opacity: 0;                                - Modifies element alpha channel mapping it fully transparent
transition-all      - transition-property: all;                  - Binds seamless animation easing maps to state modification
duration-300        - transition-duration: 300ms;                - Executes the CSS state interpolation over precisely 0.3s
ease-in-out         - transition-timing-function: ease-in-out;   - Makes the animation start slowly, speed up, then end slowly
hover:shadow-2xl    - hover { box-shadow: ... }                  - Conditionally modifies the shadow only while actively hovered
focus:ring-2        - focus { box-shadow: 0 0 0 2px ... }        - Adds a 2px colored halo mapped to inputs actively focused
pointer-events-none - pointer-events: none;                      - Unbinds mouse interaction mapping (eliminates ghost clicks)
resize-none         - resize: none;                              - Conditionally locks physical corner resizing tools on textareas
```

## Framer Motion Commands
```text
animate()        - Core function mapped to dynamically manipulate CSS styling timelines via code instructions.
inView()         - Wrapper intersection observer locking the animation timeline trigger until the viewport actively reveals it.
stagger(X)       - Generates a looping delay mathematically offsetting sibling execution timing to mimic domino cascades.
opacity: [0, 1]  - Array notation ordering the element alpha from 0 (transparent) linearly directly to 1 (solid).
y: [50, 0]       - Array notation translating the vertical axis position pushing it from exactly 50px below back to Origin 0.
scale: 1.05      - Explicit interpolation increasing sizing geometry bounds strictly by 5% executed usually on hovered contexts.
duration: 0.8    - Sets mapping sequence lifecycle explicitly to 800 milliseconds absolute execution resolution context.
delay: 0.2       - Creates an explicit 200/ms dead zone intentionally preceding timeline initiation boundaries.
easing: "ease"   - Specific CSS motion bezier timing matrices accelerating rapidly and settling gently.
repeat: Infinity - Overrides mapping cycles rendering timeline execution loops ad-infinitum specifically for ambient motions.
```

## Layout Structure Overview
```text
1. Header Component
   - Fixed mapping locked to viewport coordinates mapping constant global navigation access.
   - Leverages relative absolute positioning allowing the logo vector graphical block to anchor standard links safely.
   - Includes full-page mobile-menu layout conditionally scaling via CSS Transforms `translate-y` transitions.

2. Hero Section Layout
   - Strictly utilizes mathematical layouts aligning explicitly to the Golden Sequence (1:1.618).
   - Generates exact percentage bounds of roughly `38%` mapped explicitly to typographic headers vs `62%` graphical splits.
   - Incorporates overlapping visual geometry (`poly1.png`) intentionally bleeding through CSS boundaries bypassing strict boxes.

3. Events Grid Section
   - Normalizes symmetrical mapping logic across `grid-cols-3` utilizing flexible container growth constraints (`flex-grow: 1`).
   - Standardizes explicitly defined visual spacing maps utilizing pure golden variables (`2.6rem` gaps scaling incrementally).

4. About Details Section
   - Symmetrically reverses the graphical logic asserting explicit logos into narrower `38%` bounds offsetting `62%` textual boundaries.
   - Employs strict line-height spacing rules generating enhanced typographic legibility across block text areas natively.

5. Form Capture Section
   - Constraints standard single-column DOM elements bounding to a localized subset container exactly `61.8%` wide.
   - Limits internal padding sizes keeping typography and bounding boxes perfectly synchronous to golden standards structurally.

6. Document Footer Area
   - Restraints layout columns stacking responsive boundaries handling generic anchor text alongside custom vectorized logos perfectly mapped.
```
