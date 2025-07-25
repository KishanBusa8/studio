# DevCard - Your Personal Developer Portfolio

Welcome to DevCard! This is a sleek, modern, and fully-customizable personal portfolio template built with Next.js, React, and Tailwind CSS. It's designed to help you showcase your skills, projects, and experience to the world in a professional and visually appealing way.

![DevCard Screenshot](https://placehold.co/800x400.png)

## ✨ Features

-   **Blazing Fast:** Built with Next.js for optimal performance and SEO.
-   **Modern Styling:** Styled with Tailwind CSS for a utility-first approach.
-   **Component-Based:** A rich set of UI components from [shadcn/ui](https://ui.shadcn.com/).
-   **Responsive:** Looks great on all devices, from desktops to mobile phones.
-   **Easy to Customize:** Update your details, projects, and skills directly in the React components.
-   **AI-Powered:** Integrates with Genkit for generative AI features.

## 🚀 Getting Started

To get this portfolio up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

-   [Node.js](https://nodejs.org/) (v18 or newer recommended)
-   [npm](https://www.npmjs.com/get-npm)

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## 🎨 Customization

Customizing your DevCard is straightforward. Most of the content is located within the `src/components/sections/` directory.

-   **`HeroSection.tsx`**: Update your name, title, professional summary, and profile picture here.
-   **`ProjectsSection.tsx`**: Add your work experience and projects to the `projectsData` array.
-   **`SkillsSection.tsx`**: List your skills and their proficiency levels in the `skillsData` array.
-   **`ContactSection.tsx`**: Update your email, resume link, and social media URLs.
-   **`src/app/globals.css`**: Change the color scheme and theme by modifying the CSS variables at the root level.
-   **`public/`**: Replace `profile.jpeg` with your own profile picture.

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
