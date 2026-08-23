# 3D lithoResins — Two-Photon Polymerization Photoresins & 3D Lithography Platform

3D lithoResins is a production-ready full-stack web application and interactive 3D microfabrication simulator inspired by **Nanoscribe** (`https://www.nanoscribe.com`). It delivers high-precision photoresin catalog management, 2PP (Two-Photon Polymerization) laser voxel physics simulation, custom formulation ordering, and Django DRF admin security with dual SQLite & MongoDB cloud synchronization.

## Architecture

- **Backend**: Django REST Framework (Python 3.12) with dual-storage SQLite (`db.sqlite3`) & MongoDB Cloud (`threedlithoresins_db`) sync, Django Messages interceptor, and Gunicorn WSGI.
- **Frontend**: React + Vite SPA styled with a modern Dark Optics & Cleanroom Glow theme, Lucide Icons, and 2PP physics simulation canvas.

## Quick Start

### 1. Django Backend
```bash
cd backend
python manage.py runserver 8000
```
Runs at `http://127.0.0.1:8000/`

### 2. React Vite Frontend
```bash
cd frontend
npm run dev
```
Runs at `http://localhost:5173/`

## Admin Portal
- Dashboard Route: Open top navigation menu and click **Admin 🛡️**.
- Default Passcode: `aliabbas1234578!` (or `3DLitho#2026!Admin`).
