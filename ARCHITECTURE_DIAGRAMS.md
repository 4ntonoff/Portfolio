# 🎨 Визуализация архитектуры данных портфолио

## 📊 Диаграмма потока данных

```
┌────────────────────────────────────────────────────────┐
│         RESUME DATA (JSON)                             │
│         src/data/resume-data.json                      │
│                                                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │ • name: Alexandr Antonov                         │ │
│  │ • email: alexandr.antonov.dev@gmail.com          │ │
│  │ • phone: +373 79 979 101                         │ │
│  │ • work: [{...}, {...}]                           │ │
│  │ • skills: [{...}, {...}]                         │ │
│  │ • education: [{...}]                             │ │
│  │ • achievements: [{...}, {...}]                   │ │
│  └──────────────────────────────────────────────────┘ │
└────────────┬───────────────────────────────────────────┘
             │
             ├─────────────────────┬──────────────────────┐
             │                     │                      │
             ▼                     ▼                      ▼
    ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
    │  getResumeData() │  │  profileConfig   │  │   TypeScript     │
    │   (lib/data.ts)  │  │  (config/...)    │  │   Types          │
    │                  │  │                  │  │  (types/...)     │
    │ Серверная        │  │ Клиентская       │  │                  │
    │ загрузка         │  │ конфигурация     │  │ Безопасность     │
    └──────┬───────────┘  └────────┬─────────┘  └──────┬───────────┘
           │                      │                   │
           │                      └──────────┬────────┘
           │                                 │
           ├──────────────────────┬──────────┴─────┐
           │                      │                │
           ▼                      ▼                ▼
    ┌─────────────────────────────────────────────────────┐
    │            useProfile* HOOKS                        │
    │          (hooks/useProfile.ts)                      │
    │                                                     │
    │  useProfileConfig()      useProfileContact()        │
    │  useProfileSkills()      useProfileAchievements()   │
    │  useProfileSocials()     useProfileSEO()            │
    └─────────────────────────────────────────────────────┘
              │
    ┌─────────┴──────────────────┐
    │                            │
    ▼                            ▼
┌──────────────────┐      ┌──────────────────┐
│  COMPONENTS      │      │  UTILITIES       │
│                  │      │                  │
│• DetailedView    │      │• analyzePortfolio│
│• SimpleView      │      │• validateProfile │
│• PortfolioStats  │      │• formatDisplay   │
│• Chatbot         │      │• generateMetrics │
└────────┬─────────┘      └────────┬─────────┘
         │                        │
         │                        │
         └────────────┬───────────┘
                      │
                      ▼
         ┌──────────────────────────┐
         │    RENDERED UI            │
         │  (HTML + CSS + JS)        │
         │                           │
         │ • Multiple views          │
         │ • Dark mode               │
         │ • Responsive              │
         │ • Animations              │
         └──────────┬────────────────┘
                    │
                    ├──────────────────┬────────────────┐
                    │                  │                │
                    ▼                  ▼                ▼
             ┌────────────┐    ┌──────────────┐  ┌──────────────┐
             │  Browser   │    │  /api/profile│  │  PDF/Print   │
             │  Display   │    │   Endpoint   │  │  Export      │
             └────────────┘    └──────────────┘  └──────────────┘
```

---

## 🔄 Циклы обновления данных

### Цикл 1: Server-Side Rendering
```
JSON File → getResumeData() → Server Component → HTML → Browser
   ↑                                                       ↓
   └───────────────────← Кэш ←───────────────────────────┘
```

### Цикл 2: Client-Side Hook
```
profileConfig → useProfileConfig() → Component State → UI Update → Browser
```

### Цикл 3: API Request
```
JSON File → getResumeData() → Analytics → JSON Response → Client
                                   ↓
                          Display/Process Data
```

---

## 🎯 Карта компонентов

```
App (Root)
│
├─ PortfolioWrapper (Client)
│  │
│  ├─ ShaderAnimation
│  │
│  ├─ ViewSwitch
│  │  ├─ DetailedView (Server)
│  │  │  ├─ ProfileHeader
│  │  │  ├─ WorkExperience
│  │  │  ├─ Education
│  │  │  ├─ Skills
│  │  │  └─ Achievements
│  │  │
│  │  ├─ SimpleView (Server)
│  │  │  ├─ ProfileCard
│  │  │  ├─ Summary
│  │  │  ├─ HighlightItems
│  │  │  └─ Links
│  │  │
│  │  └─ JsonDisplay (Client)
│  │     └─ RawJSON
│  │
│  ├─ FlowiseChatbot (Client)
│  │
│  └─ PortfolioStats (Client)
│     ├─ StatCard
│     ├─ SkillsDisplay
│     └─ CompaniesTimeline
│
└─ PrintDrawer (Client)
   └─ PrintPreview
```

---

## 📈 Иерархия данных

```
ResumeData
│
├─ Profile Information
│  ├─ name
│  ├─ initials
│  ├─ location
│  ├─ about
│  ├─ summary
│  ├─ avatarUrl
│  └─ personalWebsiteUrl
│
├─ Contact
│  ├─ email
│  ├─ phone
│  └─ social[]
│     ├─ name
│     └─ url
│
├─ Work Experience
│  ├─ company
│  ├─ title
│  ├─ badges[]
│  ├─ start
│  ├─ end
│  ├─ description
│  └─ bulletPoints[]
│
├─ Education
│  ├─ school
│  ├─ degree
│  ├─ start
│  ├─ end
│  ├─ location
│  └─ gpa
│
├─ Skills
│  ├─ name
│  └─ items[]
│
├─ Achievements
│  ├─ title
│  ├─ description
│  └─ reference[]
│
├─ Projects
│  ├─ title
│  ├─ description
│  ├─ tags[]
│  └─ bulletPoints[]
│
└─ Languages
   ├─ name
   ├─ level
   └─ proficiency
```

---

## 🎨 Состояние компонента

```
PortfolioWrapper State
│
├─ viewMode: "initial" | "simple" | "detailed" | "developer"
│  │
│  ├─ "initial"
│  │  └─ Показать: Кнопку выбора вида
│  │
│  ├─ "simple"
│  │  └─ Показать: Упрощённый вид + статистика
│  │
│  ├─ "detailed"
│  │  └─ Показать: Подробный профиль + чат
│  │
│  └─ "developer"
│     └─ Показать: Сырой JSON вывод
│
└─ isTransitioning: boolean
   └─ Контролирует: Плавные переходы между видами
```

---

## 🔐 Безопасность типов

```
TypeScript Layer

ResumeData (Interface)
    ↓
├─ name: string
├─ email: string
├─ work: WorkExperience[]
├─ skills: SkillCategory[]
├─ education: Education[]
├─ achievements: Achievement[]
└─ ...

Validation Layer

validateProfileData()
    ↓
├─ Проверить типы
├─ Проверить обязательные поля
├─ Проверить длину строк
└─ Вернуть ValidationResult

Result Handling
    ↓
├─ isValid: boolean
├─ errors: string[]
├─ warnings: string[]
└─ summary: { completeness, totalChecks, passedChecks }
```

---

## 🚀 Performance Optimization

```
Data Flow Optimization

JSON File
    ↓ (Read once)
Resume Cache
    ↓ (Distribute)
    ├─ Server Rendering (SSR)
    │  └─ HTML sent to client
    │
    ├─ Client Hooks (useProfile*)
    │  └─ Local state only
    │
    ├─ API Endpoint (/api/profile)
    │  └─ Edge cached (3600s)
    │
    └─ Analytics Cache
       └─ Computed on demand

Result: Minimal re-computations, maximum caching
```

---

## 📱 Responsive Breakpoints

```
                    Desktop
                   ─────────
                   lg: 1024px
                   
            Tablet
           ────────
           md: 768px
           
      Mobile
     ───────
     sm: 640px
     
xs: Default (0px)
```

---

## 🎬 Animation Flow

```
Initial State
    ↓
Shader Animation Background
    ↓ (User clicks view button)
Fade Out (200ms)
    ↓
Content Switch
    ↓
Fade In (200ms)
    ↓
Ready to Interact
```

---

## 📊 SEO Structure

```
HTML Head
│
├─ Title Tag
│  └─ "Alexandr Antonov | Frontend Developer | React & TypeScript"
│
├─ Meta Description
│  └─ "Frontend Developer with 3+ years of experience..."
│
├─ Meta Tags
│  ├─ charset: utf-8
│  ├─ viewport: responsive
│  └─ theme-color: dark
│
├─ Open Graph
│  ├─ og:title
│  ├─ og:description
│  ├─ og:image
│  ├─ og:url
│  └─ og:type: profile
│
├─ Twitter Card
│  ├─ twitter:card
│  ├─ twitter:title
│  ├─ twitter:description
│  └─ twitter:image
│
└─ Canonical
   └─ https://alexandr-antonov.dev
```

---

## 🔄 API Response Structure

```
GET /api/profile

Response:
{
  "success": true,
  "timestamp": "2025-01-03T00:00:00Z",
  "data": {
    "resume": { ... },           // Full resume data
    "analytics": {               // Computed analytics
      "totalExperience": "3+",
      "companiesCount": 2,
      "skillsCount": 21,
      ...
    },
    "insights": {                // Insights
      "experience": "...",
      "expertise": "...",
      ...
    },
    "metrics": {                 // Performance metrics
      "profileCompleteness": 95,
      "skillsDiversity": 7,
      ...
    },
    "formatted": { ... }         // Display-ready data
  },
  "metadata": {
    "version": "1.0",
    "lastUpdated": "2025-01-03",
    "author": "Alexandr Antonov"
  }
}
```

---

## 🎯 Интеграция со сторонними сервисами

```
Portfolio (Your App)
│
├─ LinkedIn Profile Link
│  └─ /in/alexandr-antonov
│
├─ GitHub Profile
│  └─ /alexandr-antonov
│
├─ Website
│  └─ alexandr-antonov.dev
│
├─ Email
│  └─ Contact Form → Email Service
│
├─ Social Media
│  ├─ Twitter
│  ├─ Medium
│  ├─ Telegram
│  └─ Instagram
│
└─ Portfolio Hosting
   └─ Vercel / Netlify
```

---

**Дата:** 3 января 2025  
**Версия:** 1.0  
**Статус:** ✅ Завершено

