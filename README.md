<img width="1324" height="793" alt="image" src="https://github.com/user-attachments/assets/f518b0df-de4b-4433-a309-6dbdcf7e85e0" />

🚀 CRUD de Productos — Laravel + React

Este proyecto incluye un backend en Laravel y un frontend en React para gestionar productos mediante una API REST.

📂 Estructura del Proyecto
Crud-Productos-Laravel-React/
│── backend/
│── frontend/
│── README.md

📦 Requisitos
Backend:
-PHP 8.2+
-Composer
-MySQL o MariaDB
Frontend:
-Node.js 18+
-NPM

⚙️ Instalación del Backend (Laravel)
cd backend
composer install
cp .env.example .env
php artisan key:generate

Configura tu base de datos en el archivo .env:

DB_DATABASE=tienda_db
DB_USERNAME=root
DB_PASSWORD=

Ejecuta las migraciones:
php artisan migrate

Inicia el servidor:
php artisan serve

🎨 Instalación del Frontend (React + Vite + TailwindCSS)

cd frontend
npm install
npm run dev


