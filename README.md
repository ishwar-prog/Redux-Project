# 🚀 Media Search Engine

A professional-grade media discovery platform built with **React** and **Redux Toolkit**. This application allows users to search across multiple media types (Photos, Videos, and GIFs) using real-world APIs like **Unsplash**, **Pexels**, and **Giphy**, featuring a robust state management system and a fully responsive UI.

---

## ✨ Key Features

- **Multi-Platform Search**: Seamlessly switch between Photos (Unsplash), Videos (Pexels), and GIFs (Giphy).
- **Global State Management**: Powered by **Redux Toolkit** for predictable and efficient data flow.
- **Persistent Collection**: Save your favorite media to a personal collection that survives page refreshes using **LocalStorage**.
- **Responsive Design**: A modern, mobile-first grid layout that adapts perfectly from mobile devices to large desktop monitors.
- **Real-time Feedback**: Integrated toast notifications (via **React-Toastify**) for user actions like saving or removing items.
- **Dynamic Media Player**: Inline video playback and high-quality image previews.

---

## 🛠️ Tech Stack

- **Frontend Library**: [React](https://reactjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Modern CSS Grid & Utilities)
- **Data Fetching**: [Axios](https://axios-http.com/)
- **External APIs**:
  - [Unsplash API](https://unsplash.com/developers) (Photos)
  - [Pexels API](https://www.pexels.com/api/) (Videos)
  - [Giphy API](https://developers.giphy.com/docs/api/) (GIFs)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 🧠 Deep Dive: How Redux Works in This Project

In this application, Redux acts as the **"Global Brain"**. It manages how data flows from the APIs to the UI, ensuring everything stays in sync.

### 1. Solving "Prop Drilling"

Usually, passing data from a parent to a deep child requires "Prop Drilling" (passing data through every middle component). Redux bypasses this by creating a **Store**—a central cloud where any component can access the data it needs directly.

### 2. The Data Lifecycle (Redux Toolkit)

- **The Store (`store.js`)**: The single source of truth. It hosts our `search` and `collection` data compartments.
- **Slices (`searchSlice.js`, `collectionSlice.js`)**: These are independent feature modules.
  - **initialState**: The starting values (e.g., empty result arrays).
  - **Reducers**: The logic that defines _how_ the state changes (e.g., `setResults`, `addCollection`).
- **Dispatching Actions**: When you click "Save" or "Search," you **dispatch** an action. It's like sending an order to the store: `dispatch(addCollection(item))`.
- **Selectors (`useSelector`)**: Components "subscribe" to parts of the state. If the results in the store change, the UI automatically updates.

### 3. State Persistence

We’ve integrated a synchronization layer between Redux and **LocalStorage**. When the app initializes, the `collectionSlice` reads your saved items from the browser's memory, making the state persistent even after a page reload.

---

## 🏗️ Project Architecture

The application follows a modular "Feature-Sliced" approach for state management:

### Global Store

The central hub for application data, merging independent slices for Search and Collections.

### Search Slice

Handles the complex lifecycle of media fetching:

- Query and Active category filtering.
- Loading & Error state synchronization.

### Collection Slice

Manages the user's personal portfolio:

- Deduplication logic (prevents adding the same item twice).
- Local storage synchronization.

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- API Keys for Unsplash, Pexels, and Giphy

### Installation

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your API keys:
    ```env
    VITE_UNSPLASH_KEY=your_unsplash_key
    VITE_PEXELS_KEY=your_pexels_key
    VITE_GIPHY_KEY=your_giphy_key
    ```
4.  **Run the development server**:
    ```bash
    npm run dev
    ```

---

## 👨‍💻 Engineering Highlights

- **Performance**: Optimized `useSelector` hooks to minimize component re-renders.
- **UX**: Linear-gradient overlays on media cards ensure text readability over any background.
- **Clean Code**: Centralized API layer separates business logic from UI components.

---

_Built with a focus on high-performance state management and clean architecture._
