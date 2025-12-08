Setting up the React project with Tailwind CSS was straightforward overall, but I did face a few challenges during the process. The biggest issue I ran into was that Tailwind wasn’t installing properly at first. When I tried running npx tailwindcss init -p, it kept showing the error “command not found.” This happened because I had accidentally installed an incompatible Tailwind version, and the binary wasn’t generated correctly.

I solved the issue by uninstalling Tailwind and reinstalling a compatible version (tailwindcss@3.4) instead of the newer v4, which still has some experimental behaviour. After reinstalling, the Tailwind config files finally appeared, and I could continue the setup.

Another small challenge was remembering that npm start only works inside the React project folder, not at the root of my internship repo. Once I switched into the correct directory (react-tailwind-setup), the development server ran successfully.

After linking Tailwind with the index.css file and adding the correct content paths in tailwind.config.js, everything worked. I tested Tailwind by adding a simple heading with classes like text-3xl font-bold text-blue-600, and seeing it render properly confirmed the setup was correct.

Overall, the setup helped me understand how Tailwind integrates into a React workflow, how PostCSS works behind the scenes, and how to troubleshoot version-related issues. This was a useful experience because I’ll be using React + Tailwind in many future tasks.



Reflection – Styling with Tailwind CSS

Using Tailwind CSS made it much easier to style the Counter and Button components. I liked that I didn’t need to switch between multiple CSS files; instead, I could apply utility classes directly inside the JSX. It made the styling process faster and more visual because I could see changes instantly.

One of the biggest advantages of Tailwind is how consistent everything becomes. The spacing, colors, and font sizes follow a system, so the UI looks more organised without me needing to manually define styles. I also found hover and active states very simple to add with Tailwind utility classes.

At the same time, Tailwind can become a bit overwhelming because the class names get long and messy if not written carefully. Another potential pitfall is relying too much on inline utility classes, which can make components harder to scan if the styling grows too big. But overall, the experience was smooth, and it felt much faster than writing traditional CSS.