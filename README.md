# 💸 Finance Dashboard

A clean, interactive personal finance dashboard built with **React.js**, featuring transaction management, spending insights, role-based UI, and beautiful data visualizations — all powered by mock data and Context API state management.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://your-vercel-link.vercel.app)

---

## 🌐 Live Demo

👉 **[https://your-vercel-link.vercel.app](https://your-vercel-link.vercel.app)**

---

## 📸 Preview

### Login
![Login Page](./assets/screenshots/login.png)

### Dashboard
![Dashboard](./assets/screenshots/dashboard.png)

### Transactions
![Transactions](./assets/screenshots/transactions.png)

### Insights
![Insights](./assets/screenshots/insights.png)

### Mobile Menu
![Mobile Menu](./assets/screenshots/mobile-menu.png)

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | UI framework |
| **JavaScript (ES6+)** | Core language |
| **Tailwind CSS** | Utility-first styling |
| **Context API** | Global state management |
| **React Router DOM** | Client-side routing |
| **Material UI (MUI)** | Component library (dropdowns, modals) |
| **Lucide React** | Icon library |
| **Framer Motion** | Animations & transitions |
| **Recharts** | Data visualizations (line, pie/donut charts) |
| **Vite** | Build tool & dev server |

---

## 📁 Project Structure

```
Dashboard/
├── public/
└── src/
    ├── assets/
    ├── Components/
    │   ├── Auth/
    │   │   ├── AuthContext.jsx        # Authentication state & logic
    │   │   ├── Login.jsx              # Login page UI
    │   │   └── ThemeContext.jsx       # Dark mode context
    │   ├── Main/
    │   │   └── Dashboard/
    │   │       ├── Analysis.jsx       # Charts & analysis section
    │   │       ├── BalanceTrend.jsx   # Balance trend line chart
    │   │       ├── Dashboard.jsx      # Main dashboard page
    │   │       ├── Overview.jsx       # Summary cards
    │   │       ├── OverviewAnalysis.jsx
    │   │       ├── RecentTransaction.jsx
    │   │       ├── Spending.jsx       # Spending donut chart
    │   │       └── SummaryCard.jsx    # Individual stat card
    │   ├── Insights/
    │   │   ├── Insight.jsx            # Insights page
    │   │   ├── KeyMetrics.jsx         # Key financial metrics
    │   │   ├── MonthlyComparison.jsx  # Month-over-month view
    │   │   ├── ShoppingCard.jsx       # Top category card
    │   │   └── SpendingHeatmap.jsx    # Spending heatmap
    │   ├── Transaction/
    │   │   ├── AddTransaction.jsx     # Add/edit transaction modal
    │   │   ├── Transaction.jsx        # Transactions page
    │   │   ├── TransactionItem.jsx    # Single transaction row
    │   │   └── TransactionList.jsx    # Transaction list with filters
    │   └── Navbar/
    │       ├── DesktopLinks.jsx       # Desktop navigation links
    │       ├── Navbar.jsx             # Top navigation bar
    │       └── NavMenu.jsx            # Mobile slide-out menu
    ├── Data/
    │   ├── recentTransactions.js      # Mock recent transactions
    │   └── TransactionData.js         # Full mock transaction dataset
    ├── App.css
    ├── App.jsx                        # Root component & routes
    ├── AppContent.jsx                 # Layout wrapper
    ├── index.css
    └── main.jsx
```

---

## ✨ Features

### 🔐 Authentication
- Login page with email & password fields
- Toggle password visibility
- Auth state managed via `AuthContext`
- Protected routes — redirects to login if unauthenticated

### 📊 Dashboard Overview
- **Summary Cards** — Total Balance, Total Income, Total Expenses, Savings Rate with sparkline mini-charts
- **Quarterly Running Balance** — Line chart showing balance trend over the year
- **Spending by Category** — Donut chart with category breakdown for the current month
- Recent transactions quick-view

### 💳 Transactions
- Full transaction list with date, amount, category, and type (income/expense)
- **Search** transactions by name
- **Filter** by type (All / Income / Expense)
- **Filter** by category (All Categories / Shopping / Food / Health / etc.)
- Add new transactions via modal form
- Edit and delete existing transactions
- Color-coded amounts (green for income, red for expense)

### 🔒 Role-Based UI (Simulated Frontend RBAC)
- **Admin** — Can add, edit, and delete transactions; full access
- **Viewer** — Read-only mode; add/edit/delete controls are hidden
- Role is switchable from the navigation menu for demo purposes

### 📈 Financial Insights
- **Top Spending Category** — Highlights the highest spend category with percentage bars for all categories
- **Monthly Comparison** — Compare income vs. expenses month over month
- **Key Metrics** — Savings rate, average monthly spend, and other derived metrics
- **Spending Heatmap** — Visual heat map of spending intensity across dates/categories

### 🌙 Dark Mode
- Toggle between light and dark themes from the navigation menu
- Theme persisted via `ThemeContext`

### 📱 Responsive Design
- Fully responsive layout across mobile, tablet, and desktop
- Mobile navigation via slide-out hamburger menu (Framer Motion animated)
- Desktop navigation with inline links

---

## 🗃️ State Management

State is managed entirely with **React Context API** — no external state library needed.

| Context | Responsibility |
|---------|---------------|
| `AuthContext` | User authentication state, current user role (Admin/Viewer), login/logout |
| `ThemeContext` | Light/dark mode toggle, theme persistence |

Transaction data and filter state are managed locally within components using `useState` and `useEffect`, keeping things simple and co-located.

---

## 📦 Mock Data

All data is static and lives in `src/Data/`:

- `TransactionData.js` — Full transaction history with fields: `id`, `name`, `date`, `amount`, `category`, `type`
- `recentTransactions.js` — Subset used for the dashboard's recent activity widget

No backend or API calls are made. All computations (totals, percentages, category grouping) happen on the frontend.

---

## 🎨 Design Decisions

- **Tailwind CSS** for rapid layout and spacing; **MUI** for polished form components (Select dropdowns, Modals)
- **Framer Motion** used for page transitions, menu animations, and card entrance effects — keeping interactions smooth without being distracting
- **Lucide React** for consistent, lightweight iconography throughout
- **Recharts** chosen for its declarative React-friendly API and built-in responsiveness
- Currency formatted in **Indian Rupees (₹)** with locale-aware number formatting
- Color system: green for income, red for expenses, category-specific colors for charts

---

## 🔄 Role Switching (Demo)

To switch roles during the demo:

1. Click the **hamburger menu** (top right) or profile icon
2. Select **Admin** or **Viewer** from the role toggle
3. Navigate to **Transactions** — the "Add Transaction" button and edit/delete icons will appear (Admin) or be hidden (Viewer)

---

## 🧩 Optional Enhancements Implemented

- ✅ Dark mode
- ✅ Animations & transitions (Framer Motion)
- ✅ Role-based UI simulation

---

## 📋 Assignment Requirements Coverage

| Requirement | Status |
|-------------|--------|
| Dashboard with summary cards | ✅ Done |
| Time-based visualization | ✅ Quarterly balance trend chart |
| Categorical visualization | ✅ Spending donut chart + category bars |
| Transaction list with date, amount, category, type | ✅ Done |
| Search & filter | ✅ Search + type + category filters |
| Role-based UI (Admin / Viewer) | ✅ Simulated with Context |
| Insights section | ✅ Top category, monthly comparison, key metrics, heatmap |
| State management | ✅ Context API |
| Responsive design | ✅ Mobile + tablet + desktop |
| Empty/no data handling | ✅ Graceful empty states |
| Dark mode | ✅ Implemented |

---

## 📝 Assumptions Made

- Authentication is simulated on the frontend — no real backend or JWT tokens
- "Request Access" on the login page is a placeholder link (no signup flow required)
- All financial data is in Indian Rupees (₹) based on the context
- Role switching is done via the nav menu as a demo mechanism rather than a login-level selection

---

## 🤝 Author

Built as part of a frontend evaluation assignment. Focused on clean UI, intuitive UX, and well-structured component architecture.