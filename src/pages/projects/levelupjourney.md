---
layout: ../../components/MarkdownProjectLayout.astro
title: "📚 Level Up Journey 🎮"
description: "An immersive gamified learning platform for students at Universidad Peruana de Ciencias Aplicadas (UPC) in Lima, Peru."
date: "2025-11-1"
tags: [
      "Full-Stack",
      "Next.js",
      "Spring Boot",
      "PostgreSQL",
      "Microservices",
      "Domain-Driven Design",
      "Azure",
    ]
coverUrl: "/LevelUpJourney.webp"
---

# Engineering Academic Success through Gamification

**Role:** Fullstack Lead & Software Architect
**Institution:** Universidad Peruana de Ciencias Aplicadas (UPC)
**Status:** Faculty Approved | Pilot Phase Successfully Completed

---

## 📖 Table of Contents

* [Executive Summary](#-executive-summary)
* [Architectural Design & Strategy](#️-architectural-design--strategy)
    * [System Context Overview (C4 Model)](#system-context-overview-c4-model)
    * [Container Architecture & Communication Patterns](#container-architecture--communication-patterns)
* [Technology Stack](#️-technology-stack)
* [Service Architecture (Bounded Contexts)](#-service-architecture-bounded-contexts)
    * [1. Code Execution Service](#1-code-execution-service-golang)
    * [2. Gamification & Challenge Engine](#2-gamification--challenge-engine-spring-boot)
    * [3. Identity Management & Learning Resources](#3-identity-management--learning-resources-spring-boot)
* [Outcomes & Measured Impact](#-outcomes--measured-impact)
* [Production Roadmap (Azure Migration)](#-production-roadmap-azure-migration)
* [Academic Context & Team Selection](#-academic-context--team-selection)

---

## 📌 Executive Summary

**Level Up Journey** is a polyglot microservices platform engineered to address a critical challenge in higher education: the **30% dropout rate** observed in early-stage IT programs, including Software Engineering, Computer Systems, and Computer Science curricula.

The platform combines gamified programming challenges with structured supplementary learning materials, with measurable objectives to **reduce student attrition by 10%** and improve academic performance by **4–5 points** on the institutional 20-point grading scale.

Following a rigorous 3-week pilot program involving 51 active participants, the project received formal validation and approval from the University's Academic Direction.

---

## 🏗️ Architectural Design & Strategy

As the technical lead, I designed the system following **Domain-Driven Design (DDD)** principles to ensure long-term scalability and maintain clear boundaries between business domains. The architecture follows a **microservices-oriented approach**, leveraging asynchronous communication patterns and polyglot persistence strategies.

### System Context Overview (C4 Model)

[Insert Image: System Context Diagram]

> **Integration Highlights:** The platform implements secure authentication through **Google and GitHub OAuth** providers, enabling streamlined user onboarding. Media asset management is handled through **Cloudinary** infrastructure.

### Container Architecture & Communication Patterns

[Insert Image: Container Diagram]

- **Event-Driven Communication:** Inter-service messaging is orchestrated through **Apache Kafka**, enabling loose coupling and resilient data flows.
- **Low-Latency Processing:** The *Challenges Service* communicates with the *Code Runner* through **gRPC**, ensuring minimal response times for code execution workflows.
- **Service Coordination:** A custom **Service Discovery** mechanism and **Spring-based API Gateway** manage request routing, load distribution, and security policies.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | Next.js, React, Tailwind CSS |
| **Backend Services** | Spring Boot (Java), Gin (Golang) |
| **Data Layer** | PostgreSQL (Relational), MongoDB (Document Store) |
| **Infrastructure** | Docker-in-Docker (DinD), Apache Kafka, gRPC |
| **Cloud Strategy** | Azure Container Apps, Azure Service Bus, Azure Database for PostgreSQL |

---

## 🧩 Service Architecture (Bounded Contexts)

Each microservice encapsulates a distinct **Bounded Context**, designed for independent scalability and operational resilience.

### 1. Code Execution Service (Golang)

[Insert Image: Component Diagram - Code Runner]

> Developed with the **Gin** framework, this service provides secure execution of student-submitted code within isolated containerized environments using **Docker-in-Docker (DinD)**. This approach ensures complete isolation between user code and production infrastructure while delivering real-time execution feedback.

### 2. Gamification & Challenge Engine (Spring Boot)

[Insert Image: Component Diagram - Challenges]

> This service manages the core business logic for programming exercises, experience point allocation, and achievement system triggers. Communication with the Code Execution Service occurs via gRPC to optimize response latency for interactive features.

### 3. Identity Management & Learning Resources (Spring Boot)

[Insert Image: Component Diagram - Academy]

> Responsible for user identity management across multiple roles (Students, Instructors, Administrators) and hosts the curated learning resources designed to complement and reinforce classroom instruction.

---

## 🚀 Outcomes & Measured Impact

- **Institutional Endorsement:** The project received formal approval from the University's Academic Direction following comprehensive review.
- **Pilot Program Execution:** A structured 3-week Proof of Concept was conducted with an initial cohort of 60 students.
- **User Engagement Metrics:** 51 participants (85% of the cohort) demonstrated sustained platform engagement, contributing valuable feedback on user experience and feature prioritization.
- **Technical Performance Validation:** The gRPC/DinD pipeline successfully handled concurrent code execution requests, validating the architecture's performance characteristics under realistic load conditions.

---

## 🔮 Production Roadmap (Azure Migration)

The current deployment serves as a validated proof of concept. The production roadmap encompasses the following milestones:

- **Container Orchestration:** Migration of services to **Azure Container Apps** for managed scaling and deployment.
- **Compute Optimization:** Deployment of compute-intensive Golang services to dedicated virtual machine instances.
- **Messaging Infrastructure:** Transition from local Kafka deployment to **Azure Service Bus** for enterprise-grade reliability.
- **Database Scaling:** Migration to **Azure Database for PostgreSQL (Flexible Server)** for managed database operations and automated scaling.

---

## 🎓 Academic Context & Team Selection

This project was developed under academic supervision at the **Peruvian University of Applied Sciences (UPC)** in Lima, Peru.
The development team was selected exclusively from the **Top 10%** of the Software Engineering program, and the project received formal academic validation upon completion.
