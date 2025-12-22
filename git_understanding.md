# What Makes a Good Commit Message?

A good commit message is:

- Clear and descriptive — it explains what changed and why it was changed.
* Specific — it focuses on one logical change.
* Short but meaningful — the title is usually under 50 characters.
* Action-oriented — starts with a verb (e.g., “Add”, “Fix”, “Update”, “Refactor”).
* Structured — optional body explaining context or reasons.

Good commit messages help maintain a clean project history and allow teams to quickly understand the evolution of the codebase.

# How Clear Commit Messages Help in Collaboration

- Clear commit messages make teamwork smoother because:
* Other developers can easily understand what was changed without reading the entire diff.
* They help during code reviews, making it easier to track specific updates.
* They act as documentation, so future team members can understand decisions taken earlier.
* They make debugging easier — developers can track down where and why a bug was introduced.

In a real-world team, clear commit messages save a lot of time and reduce confusion.

# How Poor Commit Messages Cause Issues Later

- Poor commit messages like “fix stuff”, “update”, “changes” can create major problems such as:
* Difficulty understanding what actually changed.
* Harder to revert or debug specific commits.
* Conflicts take longer to resolve because no one knows the intention behind changes.
* Slower onboarding for new developers.
* Reduced traceability when searching for when/why a bug started.

In short, unclear commit messages make the entire project harder to maintain.











git checkout main -- <file>

# What it does

This command restores one specific file to the version that exists on the main branch — without touching any other files or your uncommitted work.

# When to use in real projects
- When you make a mistake in one file, but don’t want to discard all your other changes.
- When you want to undo accidental edits without resetting the whole repo.
- Very useful during debugging or experiments.

# What surprised me

It replaced only that file, not the entire working directory. I had always thought checkout was more destructive, but this single-file restore is extremely safe and helpful.

git cherry-pick <commit>

# What it does

Cherry-pick takes one specific commit from any branch and applies it on your current branch, without merging the whole branch.

# When to use in real projects

- When someone made an important fix on another branch, and you want just that fix.
- When you accidentally commit something to the wrong branch and want to move it.
- For production hotfixes — pick only the needed patch, not all experimental code.

# What surprised me

Cherry-pick kept the commit history clean and did not bring other commits with it. It’s a very controlled way to move changes around.

git log

# What it does

Shows the full commit history including:
- commit hashes
- author
- date
- commit messages

# When to use in real projects

- To understand when something changed.
- To find a commit you want to revert or cherry-pick.
- During debugging or code reviews.

# What surprised me

The graph view made it extremely easy to understand branching. It helped me see how my commits flowed across branches.

git blame <file>

# What it does

Shows who last modified each line in a file, along with the exact commit hash and timestamp.

# When to use in real projects

- To find when a bug was introduced.
- To understand why a line was written a certain way.
- To ask the right person for clarification.

# What surprised me

It was very detailed — it even shows old commits and authors line by line. It’s like a forensic tool for code history.





Reflection: Creating & Reviewing Pull Requests

# Why are PRs important in a team workflow?
Pull Requests are essential because they allow developers to review code before it is merged into the main branch. This prevents bugs, improves code quality, and ensures that multiple people agree on the changes. PRs also act as documentation for why a change happened.

# What makes a well-structured PR?
A good PR has a clear title, a detailed description, and a logical list of changes. It should be small, focused on one task, and easy to understand. Including screenshots, testing notes, and linking related issues helps reviewers understand the context quickly.

# What did you learn from reviewing an open-source PR?
Reviewing a React open-source PR showed how professional teams collaborate. The discussions were highly detailed—reviewers asked for exact changes, improvements, and explanations. I learned that even small changes go through strict review standards, and communication is respectful, precise, and technical. This shows how important review culture is in large-scale projects.






## Branching & Team Collaboration

### Why is pushing directly to `main` problematic?

Pushing directly to the `main` branch is risky because it can introduce bugs or incomplete features into the stable version of the project. In a team environment, `main` usually represents production-ready or working code. If everyone pushes directly to it, mistakes can break the project for the whole team and make it difficult to track where issues came from.

### How do branches help with reviewing code?

Branches allow developers to work on features or fixes in isolation without affecting the main codebase. Changes made in a branch can be reviewed through pull requests before being merged into `main`. This makes it easier for teammates to review code, suggest improvements, catch bugs, and ensure coding standards are followed. Branching also encourages better collaboration and communication within the team.

### What happens if two people edit the same file on different branches?

If two people edit the same file on different branches, Git keeps the changes separate until they are merged. When merging, Git may automatically combine the changes if they do not conflict. However, if both people edit the same lines of code, a merge conflict occurs. The conflict must be resolved manually by deciding which changes to keep before the merge can be completed.

### Reflection

This experiment showed how branching helps keep the `main` branch stable while allowing multiple people to work in parallel. It also highlighted why structured workflows using branches and reviews are essential for teamwork and avoiding errors in shared codebases.



This line was added from the main branch.
