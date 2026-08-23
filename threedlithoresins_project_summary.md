# 3D lithoResins - Project Architecture Summary

## Overview
**3D lithoResins** is a high-precision two-photon polymerization (2PP) lithography software platform and photoresin catalog web application inspired by Nanoscribe GmbH.

### Key Technical Specs
1. **Frontend**: Vite 6, React 18, HTML5 Canvas 2D Lithography Physics Engine, Lucide Icons, Custom Cyan/Violet Optics Theme.
2. **Backend**: Python 3.12, Django 5.x, Django REST Framework, WhiteNoise, PyMongo, SQLite ORM.
3. **Dual DB Architecture**: SQLite (`db.sqlite3`) for local primary data storage + PyMongo cloud connector (`threedlithoresins_db`).
4. **Interactive Simulator**: `LithoResinCanvas.jsx` rendering 780nm femtosecond laser spot, voxel volume, layer Z-stepping, crosslinking polymer chains, galvo scanner trajectory, and material parameter telemetry.
5. **Admin Console**: Protected via `X-Admin-Passcode` (`aliabbas1234578!`) with user management, subscription overrides, service requests, resin sample request tracking, and real-time telemetry.

### Sub-Routes & Page Navigation
- `/` - Home Page
- `/designer` - Interactive 2PP Physics Engine & Lithography Canvas
- `/products` - Photoresins Catalog (IP-Dip, IP-L, IP-Visio, Bio-Resins, Quantum Resins)
- `/applications` - Micro-optics, Photonics, Microfluidics, Biofabrication
- `/shop` - Resins, Hardware Accessories & Software Licenses
- `/support` - Tutorials, FAQ, Handbook, Changelog
- `/who-we-are` - Company Profile, Cleanroom Facilities, Partners, Contact
- `/admin` - Executive Control Console
- `/premium-consultation` - Nanofabrication Technical Spec Builder
- `/legal-notice`, `/privacy-statement`, `/terms-conditions`, `/service-specification`, `/how-to-order`
