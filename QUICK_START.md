# 🎯 QUICK START GUIDE

## Что было обновлено? ✅

Ваше портфолио полностью переконфигурировано с информацией о **Alexandr Antonov** - опытном Frontend разработчике.

---

## 📌 Быстрые ссылки

### 📄 Документация
- **[PROFILE_UPDATE_GUIDE.md](./PROFILE_UPDATE_GUIDE.md)** - Полное руководство по использованию
- **[COMPLETE_CHANGELOG.md](./COMPLETE_CHANGELOG.md)** - Полный список всех изменений
- **[EXAMPLES.md](./EXAMPLES.md)** - 8 примеров использования

### 📝 Основные файлы
- **[src/data/resume-data.json](./src/data/resume-data.json)** - Все данные профиля
- **[src/config/profile.ts](./src/config/profile.ts)** - Конфигурация профиля
- **[README.md](./README.md)** - Описание проекта

---

## 🚀 Запуск проекта

### 1. Установка
```bash
cd C:\Users\Legion\Desktop\portfolio-main
pnpm install
```

### 2. Запуск dev сервера
```bash
pnpm run dev
```

### 3. Открыть в браузере
```
http://localhost:3000
```

---

## 📝 Редактирование профиля

### Изменить информацию:
1. Откройте `src/data/resume-data.json`
2. Отредактируйте нужные поля
3. Сохраните файл
4. Изменения мгновенно отразятся на сайте ✨

### Примеры редактирования:

**Изменить имя:**
```json
"name": "Your Name Here"
```

**Добавить навык:**
```json
"skills": [
  {
    "name": "New Category",
    "items": ["Skill 1", "Skill 2"]
  }
]
```

**Обновить контакт:**
```json
"contact": {
  "email": "your.email@example.com",
  "phone": "+1 234 567 8900"
}
```

---

## 🎨 Использование в компонентах

### Вариант 1: Server Component
```typescript
import { getResumeData } from "@/lib/data";

export async function MyComponent() {
  const data = await getResumeData();
  return <div>{data.name}</div>;
}
```

### Вариант 2: Client Component с хуком
```typescript
"use client";
import { useProfileConfig } from "@/hooks/useProfile";

export function MyComponent() {
  const config = useProfileConfig();
  return <div>{config.name}</div>;
}
```

### Вариант 3: API Call
```typescript
const response = await fetch("/api/profile");
const { data } = await response.json();
console.log(data.name);
```

---

## 📊 Доступные данные

### Основная информация
- `name` - Имя
- `email` - Email адрес
- `phone` - Телефон
- `location` - Локация
- `summary` - Краткое описание
- `about` - О себе

### Карьера
- `work[]` - История работы
- `education[]` - Образование
- `achievements[]` - Достижения

### Навыки
- `skills[]` - Навыки по категориям
- `languages[]` - Языки

### Контакты
- `contact.email` - Email
- `contact.phone` - Телефон
- `contact.social[]` - Социальные сети

---

## 🛠️ Доступные утилиты

### Аналитика
```typescript
import { analyzePortfolio } from "@/utils/portfolio-analytics";

const data = await getResumeData();
const analytics = analyzePortfolio(data);
// → totalExperience, companiesCount, skillsCount, etc.
```

### Валидация
```typescript
import { validateProfileData } from "@/utils/profile-validation";

const result = validateProfileData(data);
// → { isValid, errors, warnings, summary }
```

### Хуки
```typescript
import { useProfileConfig } from "@/hooks/useProfile";

const config = useProfileConfig();
// → Весь конфиг профиля
```

---

## 🔗 Контактная информация

| Информация | Значение |
|-----------|----------|
| Имя | Alexandr Antonov |
| Email | alexandr.antonov.dev@gmail.com |
| Телефон | +373 79 979 101 |
| LinkedIn | /in/alexandr-antonov |
| GitHub | /alexandr-antonov |
| Website | https://alexandr-antonov.dev |

---

## 📈 Статистика профиля

- **Опыт:** 3+ года
- **Компании:** 2 (Zalando, Crawless)
- **Навыков:** 20+
- **Достижений:** 4+
- **Языков:** 3

---

## 🎯 Топ достижения

🥇 1st Place – Tekwill National Contest 2023  
📈 40% bug reduction through TypeScript refactoring  
⚡ 26% build time improvement  
⭐ 95%+ user satisfaction  

---

## 🛠️ Технологический стек

### Frontend
- React 19
- TypeScript 5
- Next.js 16
- TailwindCSS

### Инструменты
- pnpm
- Docker
- Git
- Vite

### UI Components
- Shadcn/UI
- Radix UI
- Lucide Icons

---

## 📂 Структура проекта

```
src/
├── app/              # Next.js pages
├── components/       # React components
├── config/          # Profile configuration (NEW)
├── data/            # Static data (UPDATED)
├── hooks/           # Custom hooks (NEW)
├── types/           # TypeScript types (UPDATED)
├── utils/           # Utilities (UPDATED)
└── lib/             # Library functions

public/              # Static files
```

---

## ✨ Новые возможности

- ✅ Централизованная конфигурация профиля
- ✅ TypeScript хуки для доступа к данным
- ✅ Автоматическая генерация аналитики
- ✅ Валидация целостности данных
- ✅ Расширенный API с метриками
- ✅ Готовые компоненты статистики
- ✅ Полная документация с примерами

---

## 🚨 Важные файлы

| Файл | Описание |
|------|---------|
| `src/data/resume-data.json` | Все данные профиля |
| `src/config/profile.ts` | Конфигурация |
| `src/hooks/useProfile.ts` | React хуки |
| `src/utils/portfolio-analytics.ts` | Аналитика |
| `src/utils/profile-validation.ts` | Валидация |
| `src/components/portfolio-stats.tsx` | Компоненты |

---

## 🔍 Примеры кода

### Пример 1: Вывести имя
```typescript
import { getResumeData } from "@/lib/data";

const data = await getResumeData();
console.log(data.name); // "Alexandr Antonov"
```

### Пример 2: Получить навыки
```typescript
import { useProfileSkills } from "@/hooks/useProfile";

const skills = useProfileSkills();
// {
//   name: "Languages",
//   items: ["JavaScript", "TypeScript", ...]
// }
```

### Пример 3: Проверить целостность
```typescript
import { validateProfileData } from "@/utils/profile-validation";

const result = validateProfileData(data);
if (!result.isValid) {
  console.log(result.errors);
}
```

### Пример 4: Получить аналитику
```typescript
import { analyzePortfolio } from "@/utils/portfolio-analytics";

const analytics = analyzePortfolio(data);
// {
//   totalExperience: "3+",
//   companiesCount: 2,
//   skillsCount: 21,
//   ...
// }
```

---

## 📚 Полная документация

Для полной информации смотрите:
1. **[PROFILE_UPDATE_GUIDE.md](./PROFILE_UPDATE_GUIDE.md)** - Полное руководство
2. **[COMPLETE_CHANGELOG.md](./COMPLETE_CHANGELOG.md)** - Все изменения
3. **[EXAMPLES.md](./EXAMPLES.md)** - Примеры кода

---

## 💡 Советы

- 💾 **Сохраняйте изменения** в `resume-data.json`
- 🔄 **Автоматическое обновление** - изменения мгновенно отражаются
- 📱 **Отзывчивый дизайн** - работает на всех устройствах
- 🖨️ **Печать в PDF** - используйте встроенные функции браузера
- 🚀 **Развёртывание** - готово к Vercel, Netlify и др.

---

## 🎉 Всё готово!

Ваше портфолио полностью обновлено и готово к использованию.  
Начните с запуска `pnpm run dev` и откройте `http://localhost:3000`

---

**Последнее обновление:** 3 января 2025  
**Версия:** 1.0  
**Статус:** ✅ Готово к использованию

