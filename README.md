# TaskFlow - React Task Manager with API Integration

A modern, responsive React application demonstrating best practices in component architecture, state management, API integration, and responsive design.

## 🚀 Features

### Core Functionality
- **Task Management**: Full CRUD operations (Create, Read, Update, Delete)
- **Local Storage**: Persistent task storage using custom `useLocalStorage` hook
- **Task Filtering**: Filter tasks by status (All, Active, Completed)
- **Priority System**: Organize tasks by priority levels (Low, Medium, High)
- **Progress Tracking**: Visual progress indicators and statistics

### API Integration
- **JSONPlaceholder API**: Fetch and display blog posts with user information
- **Search Functionality**: Real-time search through posts
- **Pagination**: Navigate through posts with responsive pagination
- **Loading States**: Elegant loading indicators and error handling
- **Error Boundaries**: Graceful error handling with retry functionality

### UI/UX Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Modern Animations**: Smooth transitions and micro-interactions
- **Accessible Design**: WCAG compliant with proper ARIA labels
- **Clean Architecture**: Reusable components and organized folder structure

## 🛠️ Technical Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Context API + Custom Hooks
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Data Fetching**: Native Fetch API with custom hooks
- **Local Storage**: Custom useLocalStorage hook

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Navbar, Footer, Layout)
│   ├── posts/           # Post-related components
│   ├── tasks/           # Task management components
│   └── ui/              # Reusable UI components (Button, Card, etc.)
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── types/               # TypeScript type definitions
├── lib/                 # Utility functions
└── App.tsx              # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd taskflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Key Features Demonstrated

### Component Architecture
- **Reusable Components**: Button, Card, Layout components with variant props
- **Composition Pattern**: Flexible component composition for complex UIs
- **TypeScript Integration**: Full type safety with interfaces and generics

### State Management
- **useState**: Local component state management
- **useEffect**: Side effects and lifecycle management
- **useContext**: Global theme state management
- **Custom Hooks**: `useLocalStorage`, `useTasks`, `usePosts`

### API Integration
- **Fetch API**: RESTful API calls to JSONPlaceholder
- **Error Handling**: Comprehensive error states and retry mechanisms
- **Loading States**: User-friendly loading indicators
- **Data Transformation**: Clean data handling and type safety

### Responsive Design
- **Mobile-First**: Responsive breakpoints and mobile optimization
- **Flexible Layouts**: CSS Grid and Flexbox for complex layouts
- **Touch-Friendly**: Appropriate touch targets and gestures
- **Performance**: Optimized images and efficient rendering

## 🎨 Design System

### Colors
- **Primary**: Blue scale for primary actions and branding
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Green (success), Red (danger), Yellow (warning)

### Typography
- **Headings**: Clear hierarchy with proper font weights
- **Body Text**: Readable font sizes with appropriate line heights
- **Interactive**: Proper contrast ratios for accessibility

### Spacing
- **Consistent**: 4px base unit for consistent spacing
- **Responsive**: Adaptive spacing for different screen sizes

## 📱 Responsive Breakpoints

- **sm**: 640px and up (Mobile landscape)
- **md**: 768px and up (Tablet)
- **lg**: 1024px and up (Desktop)
- **xl**: 1280px and up (Large desktop)

## 🧪 Best Practices Implemented

1. **Component Design**
   - Single Responsibility Principle
   - Prop validation with TypeScript
   - Consistent naming conventions

2. **State Management**
   - Minimal state duplication
   - Proper state lifting
   - Custom hooks for reusable logic

3. **Performance**
   - Lazy loading where appropriate
   - Efficient re-rendering patterns
   - Optimized bundle size

4. **Accessibility**
   - Semantic HTML elements
   - ARIA labels and roles
   - Keyboard navigation support

5. **Code Quality**
   - TypeScript for type safety
   - Consistent code formatting
   - Clear component interfaces

## 🔄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is optimized for deployment on:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author: Abel sifuna

Built with ❤️ to demonstrate modern React development practices.

---

*This project showcases proficiency in React, TypeScript, Tailwind CSS, and modern web development best practices.*
