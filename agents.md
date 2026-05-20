# AGENTS.md

This document provides guidance for AI coding agents and developers working on this repository.

The goal of this file is to ensure that all contributors (human or AI) understand the architecture, SEO strategy, product direction, and coding rules of this project.

---

# 1. Project Overview

This project is a **Turkish stylish text generator website** built with **Next.js, TypeScript, and Tailwind CSS**.

The website allows users to generate **fancy Unicode text styles** which can be copied and used across different platforms.

Examples of platforms where these styles are used:

- Instagram
- TikTok
- Discord
- PUBG
- WhatsApp
- Twitter/X
- Gaming nicknames
- Social media bios

The main purpose of the website is:

1. Provide a **fast fancy text generator tool**
2. Build **SEO topical authority around "yazi stilleri"**
3. Expand into multiple **content silos**
4. Build a **scalable SEO-driven SaaS-style tool platform**

---

# 2. Primary SEO Keyword

The main keyword for the entire website is:

**yazi stilleri**

The homepage targets this keyword and acts as the **central authority hub**.

All silos and supporting pages expand topical authority around this keyword.

---

# 3. Product Vision

The long-term goal is to build a **large SEO-driven tool website** similar to successful generator sites.

Key characteristics:

- SaaS-like UI
- fast generator tools
- strong internal linking
- silo SEO architecture
- scalable page system
- high copy-to-clipboard usage

Traffic strategy:

1. Tool-based landing pages
2. Keyword-based silo pages
3. Informational support content
4. Internal linking authority

---

# 4. Current Development Phase

## Version 1 (Current)

The current version focuses on **structure and functionality**, not full content.

Version 1 includes:

- homepage
- generator tool
- silo structure
- first silo pages
- header
- footer
- SEO metadata
- internal linking foundation

Version 1 intentionally **does NOT include large content sections**.

Content expansion will happen in **Version 2**.

---

# 5. Technology Stack

The project uses modern web technologies.

Core stack:

- Next.js (latest stable)
- App Router
- TypeScript
- Tailwind CSS

Optional allowed utilities:

- lucide-react (icons)
- clsx or class-variance-authority

Avoid unnecessary dependencies.

The website must remain lightweight and fast.

---

# 6. Project Architecture

The project follows a **modular component architecture**.

Key principles:

- reusable components
- separation of concerns
- scalable folder structure
- server components where possible
- client components only when necessary

Example structure:

src/

app/
layout.tsx
page.tsx
globals.css

yazi-stilleri/page.tsx
guzel-yazi-stilleri/page.tsx
farkli-yazi-stilleri/page.tsx
havali-yazi-stilleri/page.tsx
dekoratif-yazi-stilleri/page.tsx

components/

layout/
Header.tsx
Footer.tsx

generator/
GeneratorCard.tsx
TextInputArea.tsx
StyleResultList.tsx
StyleResultItem.tsx
CopyButton.tsx

shared/
Container.tsx
SectionHeading.tsx
CategoryCard.tsx

lib/
textStyles.ts
site.ts
navigation.ts

data/
categories.ts
faqs.ts

---

# 7. Core Product Feature

The main feature is a **Fancy Text Generator**.

Users type text and instantly see multiple stylish versions.

Example:

Input:

Sajid

Output examples:

𝓢𝓪𝓳𝓲𝓭  
𝕊𝕒𝕛𝕚𝕕  
Ⓢⓐⓙⓘⓓ  
🅢🅐🅙🅘🅓  
Ｓａｊｉｄ

Users can copy any style using a **copy button**.

---

# 8. Generator Requirements

The generator must support:

- real-time transformation
- copy-to-clipboard
- mobile friendly UI
- placeholder text
- clear/reset button
- Turkish character handling
- fallback behavior if characters cannot be transformed

Minimum styles in Version 1:

**25–40 styles**

The style mapping must be implemented in:

lib/textStyles.ts

The mapping system must be **easy to extend**.

---

# 9. SEO Architecture (Silo Strategy)

The website follows a **topical silo structure**.

Homepage acts as the main authority page.

Example structure:

/

Main silo hub:

/yazi-stilleri

Supporting pages:

/guzel-yazi-stilleri
/farkli-yazi-stilleri
/havali-yazi-stilleri
/dekoratif-yazi-stilleri

Each page links back to:

- homepage
- silo hub
- related pages

This builds strong topical authority.

---

# 10. Future Silos

Future versions of the website will add more silos.

Planned silos include:

sekilli-yazi  
nick-yazma  
semboller  
el-yazisi  
yazi-fontlari

Each silo will contain supporting pages and tool integrations.

---

# 11. Page Design Structure

Each page should follow a similar layout:

1. Header
2. Hero section
3. Generator tool
4. Style results
5. Short explanation section
6. Internal links
7. FAQ preview
8. Footer

The generator must appear **above the fold or near the top**.

---

# 12. UI / UX Guidelines

The website must feel like a **modern SaaS tool**.

Design principles:

- clean layout
- minimal interface
- clear hierarchy
- rounded cards
- soft shadows
- large readable text
- strong copy buttons
- fast loading

Mobile experience must be excellent.

Avoid clutter.

Avoid excessive colors.

Focus on usability.

---

# 13. Header Requirements

The header must include:

- logo
- homepage link
- link to /yazi-stilleri
- expandable structure for future silos
- mobile menu
- CTA button

Example CTA:

Yazıyı Oluştur

---

# 14. Footer Requirements

Footer should include:

- short brand description
- useful links
- silo links
- legal pages

Example legal pages:

Gizlilik Politikası  
Kullanım Şartları  
İletişim  

---

# 15. SEO Implementation

Each page must include:

- unique title
- meta description
- H1 heading
- semantic HTML
- internal links
- clean URL structure

Avoid:

- duplicate titles
- keyword stuffing
- thin pages

All UI text must be **Turkish**.

---

# 16. Security Rules

Security is extremely important.

Never allow unsafe patterns.

Never use:

eval()  
Function() constructor  
unsafe script injection  

User input must always be treated as **plain text**.

Never render user input as HTML.

Prevent:

- XSS
- script injection
- unsafe dynamic imports

Clipboard functionality must remain safe.

Dependencies must be minimal and trusted.

---

# 17. Performance Rules

The site must remain fast.

Use:

- server components when possible
- optimized bundle size
- minimal dependencies

Avoid:

- heavy UI frameworks
- unnecessary animations
- large client bundles

---

# 18. Code Quality Standards

Code must be:

- readable
- modular
- typed with TypeScript
- easy to extend
- well structured

Avoid:

- dead code
- large monolithic files
- unnecessary complexity

---

# 19. Version 2 Expansion

Version 2 will add:

- long-form content
- article sections
- FAQ expansion
- more silos
- improved internal linking
- advanced SEO content

Content pages will range from:

600–1200 words.

---

# 20. Deployment

The project should remain compatible with:

- Vercel
- Cloudflare
- static deployments

The codebase must stay production-ready.

---

# 21. Final Goal

The final product should become a **large SEO-driven generator platform**.

Characteristics:

- strong generator tools
- structured silo architecture
- scalable page system
- high organic search traffic
- high user engagement

The architecture should support **hundreds of pages in the future without refactoring the core system**.
