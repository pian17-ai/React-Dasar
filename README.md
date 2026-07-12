# React-Dasar

## How to install tailwindcss in react project

### Install tailwindcss
```bash
npm install tailwindcss @tailwindcss/vite
```

### Update vite.config.ts
```typescript
import tailwindcss from '@tailwindcss/vite'

plugins: [
    react(),
    tailwindcss() <---
  ],
```

### Update css file
You can update in index.css or App.css
```css
@import 'tailwindcss';
```
