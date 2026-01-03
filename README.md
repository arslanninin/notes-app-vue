_**en** | [ru](README.ru.md)_

# 📝 Notes App Vue

<div align="center">

![Vue. js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-3.0-FFD859?style=for-the-badge&logo=pinia&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern notes web application built with Vue 3 using Composition API and a modern technology stack.

### 🚀 Try Demo: [notes-app-ninin.vercel.app](https://notes-app-ninin.vercel.app)

[Features](#-features) • [Installation](#-installation) • [Technologies](#%EF%B8%8F-tech-stack)

</div>

---

## ✨ Features

- 📝 **Create and Edit Notes** — intuitive interface for working with notes
- 💾 **Local Storage** — data is saved in the browser
- 🎨 **Modern Design** — styled with Tailwind CSS 4
- ⚡ **Fast Performance** — thanks to Vite and Vue 3 optimization
- 🔄 **State Management** — using Pinia
- 🧭 **Routing** — Vue Router for navigation
- 📱 **Responsive** — works on all devices

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Vue.js | 3.5.24 | UI Framework |
| Vite | 7.2.4 | Build tool and dev server |
| Tailwind CSS | 4.1.18 | Utility-first CSS |
| Vue Router | 4.6.4 | Routing |
| Pinia | 3.0.4 | State management |

## 📋 Prerequisites

Before installation, make sure you have:

- **Node.js** — version 16.x or higher
- **pnpm** — package manager (recommended)

```bash
# Install pnpm (if not already installed)
npm install -g pnpm
```

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/arslanninin/notes-app-vue.git
cd notes-app-vue
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the dev server**

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 📦 Production Build

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
notes-app-vue/
├── src/
│   ├── assets/          # Static resources (images, fonts)
│   ├── components/      # Reusable Vue components
│   ├── router/          # Vue Router configuration
│   ├── store/           # Pinia stores (state management)
│   ├── utils/           # Utilities and helpers
│   ├── views/           # Application pages
│   ├── App.vue          # Main component
│   ├── main.js          # Entry point
│   └── style.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── README.md            # Documentation
```

## 🎯 Usage

### Basic Commands

```bash
pnpm dev       # Start dev server with hot-reload
pnpm build     # Build for production
pnpm preview   # Preview production build locally
```

## 🤝 Contributing

Contributions are welcome! If you want to improve the application:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.  See the [LICENSE](LICENSE) file for details.

## 👤 Author

**arslanninin**

- GitHub: [@arslanninin](https://github.com/arslanninin)

## ⭐ Support

If you liked the project, give it a ⭐ on [GitHub](https://github.com/arslanninin/notes-app-vue)!

---

<div align="center">
Made with ❤️ by [arslanninin](https://github.com/arslanninin)
</div>
