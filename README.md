# Fundit Full Stack Entry Exam

Hi there!  
In this exam you will extend and add new features to our matching system.
The task's main purpose is to test your ability to learn new topics and deliver high quality products. It combines building UI components and a server development as well.

To complete this task, we recommend getting to a basic level on the following subjects:

- Git
- React js
- Node.js

## Getting Started

1. Make sure you have a [GitHub](https://github.com) account
2. Go [here](https://github.com/new/import) and import this repository into your account. Make sure to select the **private** option
3. [Clone](https://try.github.io/) your new repository to your computer
4. Make sure you have _Node.js_ 12 or higher and _npm_ 6 or higher installed
5. Install the project dependencies by running `npm install` from the project's directory (using a terminal)
6. Run the project by running `npm start`

You should now have the development version running on your computer and accessible via http://localhost:3000
and api http://localhost:8888

## Before you start

The current code base is far from perfect. While you complete the following tasks, try to improve the existing code. The system should be **scalable**, and should support different screens and devices.

After each completed step, please commit and push. The commit message should be something like `Part 1 - credit score logic`, `Part 2b - search filters`, `Part 3c - approve and decline functionality`.

### Part A - Match credit score:

1. We need to implement simple logic for scoring:
   1. For **A** user credit score must to be **679** and above.
   2. For **B** user credit score must to be between **579** and **679**.
   3. For **C** user credit score must to be under **579**.
2. Add colors for score, green for A, yellow for B and red for C.
   ![](https://www.fundit.io/wp-content/uploads/2021/11/part1.png)
3. Find a UX solution for scoring display and implement it, remember this UI must be user friendly.
4. Our call center asked us to add credit score data to the match.

### Part B - Search and filters:

1. We are showing the last 5 matches. The rumor in the call centers says there are a lot more. Please fix this, and **remember that we’re spreading worldwide, and we will have many more matches soon. Much much more.**

2. The simple search we provide isn’t enough. We need to add an ability to search for match companies and email.

3. **[BONUS]** - Add an ability to filter matches by labels. (Decline, Possible, Open, Close)

### Part C - approve and decline functionality

1. We must add 2 buttons approve and decline.
2. Approve and Decline functionality will be to hide hide clicked match and count how many matches are approved and decline.

### Part D - Your personal touch (bonus mission):

Think of a small addition to this project and make it happen. It should involve adding something to the UI, or server (or both!). A good rule of thumb for the effort here is that it should not exceed the time that it took you to perform the previous parts.
Please describe the feature you've added on your email back to us

## General notes

- Test your work well. Think of edge cases. Think of how users will use it, and make sure your work is of high quality
- Stick to the best practices of the libraries used as much as possible
- This task involves both client and server code. Regardless of bonuses and part 4, in the end you should have touched both areas. If you haven't - you probably are not covering all our requirements.
- If you have any questions regarding the task itself or its environment, feel free to ask in the exam's e-mail. For general coding / technology questions, please consult stack overflow, forums and other sources of your choice.

## Submitting

1. add `username: fundit-exam, email: andrey@novellofinancial.com ` as collaborators to your imported repo.
2. send the repo's URL back to the email you got from us. Describe your extra touch (part 4), and any general notes you may have. Can be anything from challenges to something you feel was not done perfect, to something you're specially proud of.

<iframe src="https://giphy.com/embed/l49JHz7kJvl6MCj3G" width="480" height="450" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
