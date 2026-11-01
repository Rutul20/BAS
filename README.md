# BAS Grading Authority

An authoritative, modern grotesque collectible trading card grading and authentication platform. Built with React 18, TypeScript, Tailwind CSS, and Vite.

## 🚀 Live Demo & Deployment

This project is configured for **automatic continuous deployment to GitHub Pages** via GitHub Actions.

- **GitHub Pages URL**: `https://rutul20.github.io/BAS/`
- Every push to the `main` branch automatically triggers `.github/workflows/deploy.yml` to build and deploy the latest version.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript (Strict typing enabled)
- **Styling**: Tailwind CSS (Bauhaus / Modernist high-contrast design)
- **Routing**: React Router 6 with SPA routing and automatic sub-path handling
- **Icons**: Lucide React
- **Build Tool**: Vite 5
- **CI/CD**: GitHub Actions (`actions/deploy-pages@v4`)

---

## 🎨 Design System

- **Pure High-Contrast Theme**: Pure white background `#FFFFFF` with architectural `#020617` solid borders.
- **4 Solid Primary Brand Colors** (Zero gradients):
  - 🔵 **Azure Blue (`#2391FF`)**: Optical Centering
  - 🟢 **Emerald Green (`#00CC66`)**: Edge Integrity
  - 🟡 **Lemon Yellow (`#FFF83F`)**: Surface Gloss
  - 🔴 **Rose Pink (`#F70063`)**: Corner Sharpness
- **Typography**: `Plus Jakarta Sans` (Weights 800 & 900) for bold modern grotesque headers and `JetBrains Mono` for certified serials and grades.
- **Architectural Slabs**: Sharp 90° square-edged encapsulation cases with certified subgrades.

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rutul20/BAS.git
   cd BAS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 📦 How to Push to GitHub

To push your local code to your GitHub repository:

```bash
git add .
git commit -m "feat: complete BAS grading authority platform with automatic deployment"
git push -u origin main
```

Once pushed, GitHub Actions will automatically build and publish your site to GitHub Pages.

---

## ⚙️ Enabling GitHub Pages (One-Time Setup)

In your GitHub repository:
1. Go to **Settings** > **Pages** (under "Code and automation" in the left sidebar).
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! Every future push to `main` will automatically deploy.
