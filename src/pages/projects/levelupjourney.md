---
layout: ../../components/MarkdownProjectLayout.astro
title: "📚 Level Up Journey 🎮"
description: "A gamified learning platform for students from Universidad Peruana de Ciencias Aplicadas, Lima, Peru"
date: "2024-01-15"
tags: ["Fullstack", "React", "Spring Boot", "PostgreSQL", "Gamification"]
coverUrl: "/public/LevelUpJourney.webp"
---

## Overview

**Level Up Journey** is an innovative gamified learning platform designed specifically for students at Universidad Peruana de Ciencias Aplicadas (UPC) in Lima, Peru. The platform transforms traditional learning into an engaging, game-like experience that motivates students to achieve their academic goals.

## Problem Statement

Traditional learning management systems often lack engagement and fail to motivate students to consistently participate in their coursework. Students need a more interactive and rewarding approach to track their progress and stay motivated throughout their academic journey.

## Solution

Level Up Journey addresses these challenges by implementing:

- **Gamification mechanics** - Points, levels, achievements, and leaderboards
- **Progress tracking** - Visual representation of learning milestones
- **Social features** - Collaborative learning and peer comparison
- **Reward system** - Unlockable content and recognition for achievements

## Key Features

### 🎯 Goal Setting & Tracking
Students can set personal academic goals and track their progress through interactive dashboards with real-time updates.

### 🏆 Achievement System
Earn badges and achievements for completing courses, maintaining streaks, and reaching milestones.

### 📊 Performance Analytics
Detailed analytics help students understand their strengths and areas for improvement with visual charts and insights.

### 👥 Social Learning
Connect with classmates, form study groups, and compete on leaderboards to foster a collaborative learning environment.

### 🎮 Level Progression
Students advance through levels as they complete activities, creating a sense of continuous progress and accomplishment.

## Technology Stack

### Frontend
- **React.js** - Modern UI library for building interactive interfaces
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React Query** - Data fetching and caching
- **Recharts** - Data visualization

### Backend
- **Spring Boot** - Robust Java framework
- **PostgreSQL** - Relational database for data persistence
- **Spring Security** - Authentication and authorization
- **JWT** - Secure token-based authentication
- **REST API** - RESTful architecture

### DevOps & Tools
- **Docker** - Containerization
- **Git & GitHub** - Version control
- **Postman** - API testing
- **IntelliJ IDEA** - Development environment

## Architecture

The application follows a **microservices-inspired architecture** with clear separation of concerns:

```
┌─────────────┐
│   React     │  ← Frontend (SPA)
│  Frontend   │
└──────┬──────┘
       │
       ↓ REST API
┌──────────────┐
│ Spring Boot  │  ← Backend API
│   Backend    │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│ PostgreSQL   │  ← Database
│   Database   │
└──────────────┘
```

## Database Design

Key entities include:

- **Users** - Student profiles and authentication
- **Courses** - Academic courses and content
- **Achievements** - Badges and unlockables
- **Progress** - Learning progress tracking
- **Leaderboards** - Ranking and competition data

## Challenges & Solutions

### Challenge 1: Performance with Large Datasets
**Solution:** Implemented pagination, lazy loading, and database indexing to handle thousands of students efficiently.

### Challenge 2: Real-time Updates
**Solution:** Used polling with React Query to provide near real-time updates without WebSocket complexity.

### Challenge 3: Engagement Retention
**Solution:** Designed carefully balanced gamification mechanics based on educational psychology principles.

## Results & Impact

- ✅ Increased student engagement by creating interactive learning experiences
- ✅ Improved course completion rates through motivation mechanics
- ✅ Enhanced peer collaboration through social features
- ✅ Provided valuable insights through analytics dashboards

## Future Enhancements

- 🔮 Mobile application (Android/iOS)
- 🔮 AI-powered personalized learning recommendations
- 🔮 Integration with university LMS systems
- 🔮 Advanced analytics with machine learning
- 🔮 Virtual rewards marketplace

## Lessons Learned

1. **User-Centered Design** - Regular user testing with students was crucial for feature refinement
2. **Scalability** - Planning for growth from the start saved significant refactoring time
3. **Gamification Balance** - Finding the right balance between game mechanics and educational value was key
4. **Performance Optimization** - Early optimization prevented major issues as the user base grew

## Live Demo

🔗 [View Live Project](#) _(Coming Soon)_

## Repository

💻 [View Source Code](#) _(Private Repository)_

---

**Project Status:** Active Development  
**Team Size:** 4 developers  
**Duration:** 6 months  
**Institution:** Universidad Peruana de Ciencias Aplicadas (UPC)