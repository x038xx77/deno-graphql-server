# GraphQL API сервер + AUTH

## Стек Node.js, GraphQL, Apollo GraphQL, PRISMA, PoostQresQL


Команда запускает выполнение кода с использованием Deno.

```
deno run -A --unstable npm:prisma db push:
```

Опция -A разрешает все разрешения (permissions).
Опция --unstable позволяет использовать нестабильные API.
npm:prisma указывает на пакет prisma, который будет загружен через NPM.
db push предположительно является командой для применения изменений базы данных с использованием Prisma.
deno run -A --unstable npm:prisma generate --data-prxoxy:

Похоже на предыдущую команду, но с generate --data-prxoxy. Возможно, это команда для генерации кода, связанного с данными (data proxies) в проекте.
deno run -A --unstable npm:prisma@^4.8 generate --data-proxy:

Аналогично предыдущим командам, но указывается конкретная версия пакета prisma и команда generate --data-proxy.
Блок с экспортом переменных окружения:

Эти строки предназначены для настройки переменных окружения, связанных с установкой Deno.
Переменная DENO_INSTALL указывает на путь к установке Deno.
PATH обновляется, чтобы включить путь к исполняемым файлам Deno.
deno run --allow-all --unstable npm:prisma@^4.8 generate --data-proxy:

Запуск генерации кода для работы с данными с указанными разрешениями.
deno cache deps.ts:

Команда кеширования зависимостей, возможно, указанных в файле deps.ts.
Комментарий # DATABASE_URL="postgresql:

Вероятно, это комментарий, который служит напоминанием или указанием настройки DATABASE_URL.
deno run --allow-all --allow-env --unstable npm:prisma@^4.8 migrate dev --name init:

Команда для выполнения миграции базы данных с использованием Prisma.
deno run -A prisma/seed.ts:

Запуск файла seed.ts (предположительно, сценарий для заполнения данных в базе).
deno run --allow-all main.ts:

Запуск файла main.ts с разрешениями на все (all).
Комментарий CORST git ---- tdev1 ----:

Комментарий, возможно, связанный с настройкой CORS (Cross-Origin Resource Sharing) или каким-либо другими настройками.
deno run -A --unstable src/main.ts:

Запуск файла main.ts с указанными разрешениями.

