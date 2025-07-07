import { useState } from 'react'  
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Products from './pages/products'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import Testimonials from './pages/testimonials'

// Root Layout component that includes the Navbar and renders child routes
const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Outlet /> {/* This is where child routes will render */}
    </div>
  );
};

// Error boundary component for handling navigation errors
const ErrorBoundary = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4" style={{color: '#2E7D32'}}>Something went wrong</h1>
        <p className="text-gray-600 mb-4">We encountered an error while loading this page.</p>
        <Link to="/" className="px-4 py-2 rounded-md text-white" style={{backgroundColor: '#2E7D32'}}>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

// Create router with all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "about", element: <About /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "export", element: <div className="min-h-screen py-20 text-center"><h1 className="text-2xl">Export Solutions Coming Soon</h1></div> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
