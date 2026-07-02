# Customer Rewards Dashboard

A React.js application that calculates and displays customer reward points based on purchase transactions over a three-month period.

---

## Features

- Calculate reward points based on purchase amount.
- Display monthly reward points per customer.
- Display total reward points per customer.
- Display all transactions with calculated reward points.
- Sort tables by customer, date, month, reward points, etc.
- Loading skeletons.
- Error handling with retry support.
- Empty state handling.
- Unit tests for business logic.
- Reusable custom hooks and utility functions.

---

## Reward Calculation

Reward points are calculated using the following rules:

| Purchase Amount | Reward Points |
|-----------------|--------------:|
| $0 - $50 | 0 |
| $50 - $100 | 1 point for every dollar over $50 |
| Above $100 | 2 points for every dollar over $100 + 50 points |

Example:

| Purchase | Reward |
|----------|-------:|
| $40 | 0 |
| $75 | 25 |
| $100 | 50 |
| $120 | 90 |
| $200 | 250 |

Decimal values are rounded down before calculating reward points.

Examples:

```
100.2 -> 50
100.8 -> 50
```

---

## Tech Stack

- React 18
- Vite
- JavaScript (ES6)
- Tailwind CSS
- Faker.js
- PropTypes

---

## Project Structure

```
src
│
├── assets
│
├── components
│   ├── common
│   ├── monthlyReward
│   ├── totalRewards
│   ├── transactions
│   ├── widgets
│
├── constants
│
├── data
│
├── hooks
│   ├── useSort.js
│   ├── useTransactions.js
│
├── services
│
├── utils
│   ├── dateFormatter.js
│   ├── rewardCalculator.js
│   ├── rewardAggregator.js
│
├── tests
│
└── App.jsx
```

---

## Application Architecture

```
Dashboard
      │
      ▼
useTransactions
      │
      ▼
fetchTransactions
      │
      ▼
rewardAggregator
      │
      ├─────────────┐
      ▼             ▼
 Widgets         Tables
```

Business logic is implemented using pure utility functions and separated from UI components.

---

## Sorting

Sorting is implemented using a reusable custom hook.

Supported sorting:

- Customer Name
- Customer Id
- Purchase Date
- Purchase Amount
- Reward Points
- Month / Year

Sorting uses comparator functions to correctly handle:

- Strings
- Numbers
- Dates
- Month + Year combinations

---

## Loading

The application displays skeleton loaders while transactions are being fetched.

---

## Error Handling

Gracefully handles API failures.

Features include:

- Error message
- Retry button
- Loading reset

---

## Empty State

Displays reusable empty-state components whenever no data is available.

---

## Unit Tests

Business logic is covered by unit tests.

Covered scenarios include:

- Reward calculation
- Date formatting
- Reward aggregation
- Monthly grouping
- Total rewards
- Statistics
- Decimal handling

---

## Installation

Clone the repository.

```bash
git clone <repository-url>
```

Install dependencies.

```bash
npm install
```

Start development server.

```bash
npm run dev
```

Run tests.

```bash
npm test
```

Build production bundle.

```bash
npm run build
```

Preview production build.

```bash
npm run preview
```

---

## Assumptions

- Reward points are calculated per transaction.
- Decimal purchase amounts are rounded down.
- Customer IDs are unique.
- Data is sorted chronologically.
- Transactions span three consecutive months.
- Rewards are aggregated by customer, month, and year.

---

## Future Improvements

- Server-side sorting
- Pagination
- Filtering
- Search
- Export to CSV
- REST API integration
- React Query
- Dark mode
- Accessibility enhancements

---

## Screenshots

### Dashboard

<img width="1272" height="658" alt="Dashboard" src="https://github.com/user-attachments/assets/84528529-590e-4908-ad84-42ca47b0abed" />

### Monthly Rewards

<img width="1247" height="486" alt="Monthly Reward" src="https://github.com/user-attachments/assets/f6cf35f5-fc03-455c-a671-91bb324cc83e" />


### Total Rewards

<img width="1256" height="275" alt="Total Rewards" src="https://github.com/user-attachments/assets/9922599d-4e7d-4123-b6e7-00f1df93c7d3" />


### Transactions
<img width="463" height="609" alt="Transactions" src="https://github.com/user-attachments/assets/6f6325bc-ceb9-496d-a8d8-894a1f9f342f" />

### Loading State

<img width="1288" height="675" alt="Loading" src="https://github.com/user-attachments/assets/507f8ce1-1e35-4549-8b1a-e25a94100893" />


### Empty State

<img width="1254" height="612" alt="Empty state" src="https://github.com/user-attachments/assets/5880cdd2-2cf9-4e37-a3c8-db5761f1cd37" />


### Error State
<img width="1320" height="417" alt="Error" src="https://github.com/user-attachments/assets/a776f948-b0f7-4ea8-8ab8-0a3c6e6013ea" />

---

## Author

Manikandan Dhanapal
