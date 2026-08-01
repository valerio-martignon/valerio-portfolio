# Valerio Martignon — Portfolio

Built with React + Vite + React Router.


## File structure

```
src/
  assets/
    images/        
  components/
    Nav.jsx          ← sticky navigation
    Footer.jsx       ← footer with legal name
    PhotoSlot.jsx    ← image placeholder component
    ProjectPage.jsx  ← shared layout for all project pages
  pages/
    Home.jsx
    Projects.jsx     ← project index with filters
    Activities.jsx
    Hobbies.jsx
    projects/
      EFR.jsx
      SPORE.jsx
      Apollo.jsx
      CloudChamber.jsx
      ElectricCart.jsx
      PWA.jsx
```

---

## Colours (to change the theme)

All colours are CSS variables in `src/index.css`:

```css
--blush:     #F1F3F5;   /* page background */
--petal:     #DCE3EA;   /* card backgrounds */
--rose:      #7C93AA;   /* borders, graph paper lines */
--deep-rose: #2F5D8A;   /* primary accent */
--berry:     #1B3A5C;   /* hover states, logo */
--ink:       #1F2226;   /* body text */
--ink-soft:  #4E5A66;   /* secondary text */
```
