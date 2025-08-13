# Kishan Busa - Personal Portfolio

Welcome to my personal portfolio! This is a modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. It showcases my skills, projects, experience, and professional background as a FullStack Mobile App Developer.

## 🎯 SEO Optimized Portfolio

This portfolio is specifically optimized for search engines to rank well for "Kishan Busa" searches. It includes comprehensive SEO features:

- **Structured Data (JSON-LD)**: Enhanced search result snippets
- **Open Graph & Twitter Cards**: Optimized social media sharing
- **XML Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Performance Optimized**: Fast loading times and Core Web Vitals
- **Mobile-First**: Responsive design for all devices
- **Blog Integration**: Technical blog posts for content marketing

![Portfolio Screenshot](https://placehold.co/800x400.png)

## ✨ Features

-   **Blazing Fast:** Built with Next.js 15 and Turbopack for optimal performance and SEO.
-   **Modern Styling:** Styled with Tailwind CSS for a utility-first approach.
-   **Component-Based:** A rich set of UI components from [shadcn/ui](https://ui.shadcn.com/).
-   **Responsive Design:** Looks great on all devices, from desktops to mobile phones.
-   **Comprehensive Sections:** Hero, Projects, GitHub Projects, Skills, Blog, Education, and Contact sections.
-   **TypeScript:** Fully typed for better development experience.

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
    cd studio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result. The custom port (9002) is configured to avoid conflicts with other development servers.


## 🎨 Project Structure

The portfolio is organized into several key sections, each located in `src/components/sections/`:

-   **`HeroSection.tsx`**: Personal introduction, profile picture, and professional summary
-   **`ProjectsSection.tsx`**: Showcase of professional projects and work experience
-   **`GitHubProjectsSection.tsx`**: Display of open-source projects and contributions
-   **`SkillsSection.tsx`**: Technical skills and proficiency levels
-   **`BlogSection.tsx`**: Blog posts and articles
-   **`EducationSection.tsx`**: Educational background and certifications
-   **`ContactSection.tsx`**: Contact information and social media links

## 🎨 Customization

Customizing this portfolio is straightforward. Most of the content is located within the `src/components/sections/` directory.

-   **`HeroSection.tsx`**: Update your name, title, professional summary, and profile picture here.
-   **`ProjectsSection.tsx`**: Add your work experience and projects to the `projectsData` array.
-   **`GitHubProjectsSection.tsx`**: Configure your GitHub projects display.
-   **`SkillsSection.tsx`**: List your skills and their proficiency levels in the `skillsData` array.
-   **`BlogSection.tsx`**: Add your blog posts and articles.
-   **`EducationSection.tsx`**: Update your educational background.
-   **`ContactSection.tsx`**: Update your email, resume link, and social media URLs.
-   **`src/app/globals.css`**: Change the color scheme and theme by modifying the CSS variables at the root level.
-   **`public/`**: Replace `profile.jpeg` with your own profile picture.

### Data Files

Content data is organized in the `src/lib/` directory:
-   `projects-data.ts`: Project information and details
-   `github-projects-data.ts`: GitHub projects configuration
-   `skills-data.ts`: Skills and proficiency data
-   `blogs-data.ts`: Blog posts and articles
-   `education-data.ts`: Educational background information

## 📦 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🛠️ Available Scripts

-   `npm run dev`: Start development server on port 9002 with Turbopack
-   `npm run build`: Build the application for production
-   `npm run start`: Start the production server
-   `npm run lint`: Run ESLint for code quality
-   `npm run typecheck`: Run TypeScript type checking
-   `npm run licenses`: Generate a complete license report for all dependencies

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses

This project uses several third-party libraries. For information about their licenses, see [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md).

### License Summary

- **Main Project**: MIT License
- **Dependencies**: Various licenses (mostly MIT and Apache 2.0)
- **Compatibility**: All dependencies are compatible with the MIT License

The MIT License allows for:
- Commercial use
- Modification
- Distribution
- Private use
- Patent use

For more details, see the full license text in the LICENSE file.

### License Compliance

To generate a complete license report for all dependencies, run:
```bash
npm run licenses
```

This will create a `LICENSES.md` file with detailed information about all third-party licenses used in the project.

### License Verification

All dependencies in this project have been verified to be compatible with the MIT License. The project uses primarily MIT and Apache 2.0 licensed dependencies, which are both permissive and compatible with each other.
