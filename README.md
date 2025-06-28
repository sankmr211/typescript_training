# TypeScript Setup & Usage Guide

This guide covers the installation and basic usage of TypeScript with Node.js.

---

## 🧰 Prerequisites

- **Node.js**: v20.19.0  
- Ensure `npm` (Node Package Manager) is available with your Node.js installation.

---

## 📦 Install TypeScript (Global)

```bash
npm install -g typescript
```

## 🔍 Check TypeScript Version

```bash
tsc -v
# Example output:
# Version 5.8.3
```

---

## ⚙️ Initialize TypeScript Configuration

Create a `tsconfig.json` file in your project:

```bash
tsc --init
```

This file allows you to customize TypeScript compiler options.

---

## 📝 Compile TypeScript File

```bash
tsc filename.ts
```

This generates `filename.js` in the same directory.

---

## 🚀 Run the Compiled JavaScript File

```bash
node filename.js
```

---

## 👁️ Compile in Watch Mode

Automatically recompile on file changes:

```bash
tsc --watch filename.ts
```

Then in a separate terminal:

```bash
node filename.js
```

---

## 📁 Recommended Project Structure

```
your-project/
├── src/
│   └── index.ts
├── dist/
│   └── index.js (after compilation)
└── tsconfig.json
```

Update `tsconfig.json` to reflect input/output paths if needed.
