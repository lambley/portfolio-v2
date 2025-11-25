import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Home, BookOpen, FolderGit2 } from "lucide-react";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import BlogPage from "./components/BlogPage";
import BlogPostPage from "./pages/BlogPost";

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-900 hover:translate-y-[-2px] transition-transform"
          >
            <span className="font-bold">Aaron Lambley</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 border-2 border-black transition-all ${
                isActive("/")
                  ? "bg-blue-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                  : "bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline font-bold">Home</span>
            </Link>
            <Link
              to="/projects"
              className={`flex items-center gap-2 px-4 py-2 border-2 border-black transition-all ${
                isActive("/projects")
                  ? "bg-purple-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                  : "bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              }`}
            >
              <FolderGit2 className="w-4 h-4" />
              <span className="hidden sm:inline font-bold">Projects</span>
            </Link>
            <Link
              to="/blog"
              className={`flex items-center gap-2 px-4 py-2 border-2 border-black transition-all ${
                isActive("/blog")
                  ? "bg-pink-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                  : "bg-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline font-bold">Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
