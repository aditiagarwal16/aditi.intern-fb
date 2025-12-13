Setting up the React project with Tailwind CSS was straightforward overall, but I did face a few challenges during the process. The biggest issue I ran into was that Tailwind wasn’t installing properly at first. When I tried running npx tailwindcss init -p, it kept showing the error “command not found.” This happened because I had accidentally installed an incompatible Tailwind version, and the binary wasn’t generated correctly.

I solved the issue by uninstalling Tailwind and reinstalling a compatible version (tailwindcss@3.4) instead of the newer v4, which still has some experimental behaviour. After reinstalling, the Tailwind config files finally appeared, and I could continue the setup.

Another small challenge was remembering that npm start only works inside the React project folder, not at the root of my internship repo. Once I switched into the correct directory (react-tailwind-setup), the development server ran successfully.

After linking Tailwind with the index.css file and adding the correct content paths in tailwind.config.js, everything worked. I tested Tailwind by adding a simple heading with classes like text-3xl font-bold text-blue-600, and seeing it render properly confirmed the setup was correct.

Overall, the setup helped me understand how Tailwind integrates into a React workflow, how PostCSS works behind the scenes, and how to troubleshoot version-related issues. This was a useful experience because I’ll be using React + Tailwind in many future tasks.



Reflection – Styling with Tailwind CSS

Using Tailwind CSS made it much easier to style the Counter and Button components. I liked that I didn’t need to switch between multiple CSS files; instead, I could apply utility classes directly inside the JSX. It made the styling process faster and more visual because I could see changes instantly.

One of the biggest advantages of Tailwind is how consistent everything becomes. The spacing, colors, and font sizes follow a system, so the UI looks more organised without me needing to manually define styles. I also found hover and active states very simple to add with Tailwind utility classes.

At the same time, Tailwind can become a bit overwhelming because the class names get long and messy if not written carefully. Another potential pitfall is relying too much on inline utility classes, which can make components harder to scan if the styling grows too big. But overall, the experience was smooth, and it felt much faster than writing traditional CSS.






Selectors help extract specific pieces of state from the Redux store in a clean and reusable way. Instead of directly accessing nested state inside components, selectors provide a single source of truth that reduces duplication and improves maintainability.

The biggest benefit is that if the structure of the state changes later, only the selector needs to be updated — not every component. Selectors also make components simpler and more readable. They are especially useful when multiple components depend on the same piece of state or when the selected value requires computation.

Using selectors also helps performance, because memoized selectors avoid recalculating values unnecessarily. Overall, selectors make Redux code more scalable, maintainable, and easier to understand.



Navigation with React Router — Reflection

What are the advantages of client-side routing?

Client-side routing allows React to change pages without reloading the browser, which makes the app feel faster and smoother. Only the part of the UI that changes is updated, while the rest of the app stays in memory. This improves performance and creates a more native-app-like experience. It also allows better state management, smoother animations, and faster navigation compared to a full-page reload.




Introduction to Redux Toolkit — Reflection
When should you use Redux instead of useState?

Redux should be used when your app needs global shared state that multiple components rely on. Unlike useState, which only manages local state inside one component, Redux centralizes the state so different parts of the app can access and update it without prop-drilling.

You should choose Redux when:

State is needed in many components

The app grows large and state logic becomes complex

You want predictable behavior with time-travel debugging

You need centralized logic instead of scattered useState hooks

For simple components, useState is enough, but Redux becomes valuable as soon as the app scales or when multiple features depend on the same data.