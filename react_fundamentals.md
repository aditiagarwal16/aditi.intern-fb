Setting up the React project with Tailwind CSS was straightforward overall, but I did face a few challenges during the process. The biggest issue I ran into was that Tailwind wasn’t installing properly at first. When I tried running npx tailwindcss init -p, it kept showing the error “command not found.” This happened because I had accidentally installed an incompatible Tailwind version, and the binary wasn’t generated correctly.

I solved the issue by uninstalling Tailwind and reinstalling a compatible version (tailwindcss@3.4) instead of the newer v4, which still has some experimental behaviour. After reinstalling, the Tailwind config files finally appeared, and I could continue the setup.

Another small challenge was remembering that npm start only works inside the React project folder, not at the root of my internship repo. Once I switched into the correct directory (react-tailwind-setup), the development server ran successfully.

After linking Tailwind with the index.css file and adding the correct content paths in tailwind.config.js, everything worked. I tested Tailwind by adding a simple heading with classes like text-3xl font-bold text-blue-600, and seeing it render properly confirmed the setup was correct.

Overall, the setup helped me understand how Tailwind integrates into a React workflow, how PostCSS works behind the scenes, and how to troubleshoot version-related issues. This was a useful experience because I’ll be using React + Tailwind in many future tasks.