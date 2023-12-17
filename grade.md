# Grade
HTML Code Quality: 9.5/10
CSS/Tailwind Code Quality: 9.5/10
Responsive Design: 9.5/10
Assignment Requirements: 10/10

Total: 38.5/40

## Comments
Great work!

### HTML
Search for `prof comment` in individual files for specific comments.

### CSS/TailwindCSS
See comments below RE form layout and position.

### Responsive Design
- Your form layout needs reworking.
  - The Contact Me content should be shown before the form on all screen sizes because it introduces the content. It also contains the page's `h1` therefore must be shown at all sizes.
    - We want the experience to be as consistent as possible between mobile and desktop, so we should have the same content for all screen sizes.
  - You should have used `display: grid;` on `.contact-me__wrap` for the layout instead of `position: absolute;` on the `form`. Using `position` overly complicated the layout and has caused the form units to spill out of the layout on certain screen sizes.

### Assignment Requirements
All requirements met!