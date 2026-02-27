# Lab 06 — React Router & Navigation

## Lab 6.1 — Multi-Page Application

Реализовано многостраничное приложение "Student Portal" с использованием react-router-dom v6.

### Структура маршрутов

Используется createBrowserRouter:

- `/` — Home (главная страница)
- `/courses` — список курсов
- `/about` — информация о программе
- `*` — 404 страница (NotFound)

Все страницы используют общий Layout с:

- `<nav>` навигацией
- `<Outlet />` для вложенных маршрутов
- `<footer>`

Навигация реализована через `<Link>`, без перезагрузки страницы.

---

## Lab 6.2 — Dynamic Routes & Query Parameters

### Динамический маршрут

Добавлен маршрут:


/courses/:id


Используются:

- `useParams()` — получение id из URL
- `loader` — загрузка данных до рендера
- `useLoaderData()` — получение данных курса
- `errorElement` — отображение ошибки при неверном id

Пример:
- `/courses/1` — показывает детали курса
- `/courses/999` — показывает "Course not found"

---

### Query параметры

На странице `/courses` реализована сортировка через:


/courses?sort=asc
/courses?sort=desc


Используется:

- `useSearchParams()`
- `searchParams.get("sort")`
- `setSearchParams()`

Кнопка Sort меняет параметр в URL и перестраивает список.

Важно: React Router не настраивает query параметры в маршрутах —
их обрабатывает сам компонент.

---

## Использованные хуки

- createBrowserRouter
- RouterProvider
- Outlet
- Link
- useParams
- useLoaderData
- useSearchParams

---

## Запуск проекта

```bash
npm install
npm run dev

Результат

Навигация без перезагрузки страницы

Работает динамический маршрут

Работают query параметры

404 отображается корректно

Все файлы в формате .tsx

Strict mode включен

any не используется


---

После этого:

```bash
git add .
git commit -m "docs: add README for Lab 06"
