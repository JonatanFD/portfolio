---
layout: ../../components/MarkdownProjectLayout.astro
title: "🏗️ Frain: Architecture as Code"
description: "A modern alternative to Structurizr that connects system design with real code."
date: "2026-02-20"
tags: ["Software Architecture", "DevTools", "TypeScript SDK", "C4 Model"]
coverUrl: "/Frain.webp"
projectUrl: 'https://github.com/Frain-Architecture-as-Code'
---

# A Better Way to Manage Architecture as Code

**Role:** Creator & Lead Architect  
**Scope:** Full-stack Development & SDK Design  
**Status:** Active Development | Open Beta  

---

## 📌 The Idea

Tools like Structurizr helped popularize **Architecture as Code**, but they can feel outdated and hard to use in modern team workflows.

I built **Frain** because I needed something simpler and more practical.  
The goal is clear: manage architecture diagrams as code, version them, and share them easily across teams.

Frain provides a **TypeScript SDK** and a central platform to create, update, and manage C4 diagrams — similar to how you work with Git repositories.

---

## 🏗️ Main Features

Frain is more than a diagram viewer. It works like a registry for architecture schemas.

### Team Support

The system is built to support real teams:

- **Organizations:** Each team has its own workspace.
- **Projects:** An organization can have multiple architecture projects.
- **API Keys:** Diagrams can be updated automatically from CI/CD pipelines or local scripts.

### The Frain SDK (TypeScript)

The SDK lets developers define components, relationships, and boundaries directly in code.

This keeps documentation aligned with the real system.  
If the system changes, the diagram can change with it.

---

## 🛠️ Tech Stack

The project uses a stack focused on performance and scalability:

- **Frontend:** Built with Next.js and Tailwind CSS. Designed to handle complex SVG/Canvas rendering.
- **Backend:**  
  - The first version was built in Spring Boot (Java).  
  - Later, I ported the API to NestJS to make it easier to deploy in cloud and edge environments.
- **Database:** PostgreSQL for relational data and structured schemas.

---

## 🚀 How It Works

1. **Define:** Describe your system using the TypeScript SDK.
2. **Push:** Send the schema to Frain using the API.
3. **Collaborate:** Teams can view and use the diagrams in a web interface.

No manual exports. No file sharing. Just sync and use.

---

## Personal Contribution

I built the entire system:  
from defining the JSON schema for diagram storage to implementing the auto-layout engine.

The goal of the project is simple: make architecture documentation easier and more practical for developers.
