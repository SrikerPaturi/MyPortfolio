import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import { Github, User, Cpu, Gitlab, Codesandbox, BookOpen, Edit, Trash, Plus, Eye, EyeOff } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './components/ui/alert';  // Corrected to use named imports
import './App.css';

function App() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* Render the Alert component if showAlert is true */}
      {showAlert && <Alert message="This is an alert message!" />}
      <button onClick={() => setShowAlert(!showAlert)}>
        {showAlert ? 'Hide' : 'Show'} Alert
      </button>
    </div>
  );
}

export default App;


const PortfolioWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [projects, setProjects] = useState([
    // Project data here
  ]);

  const [blogPosts, setBlogPosts] = useState([
    // Blog post data here
  ]);

  const [skills, setSkills] = useState([
    // Skill data here
  ]);

  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(false);

  const handleProjectAdd = () => setShowProjectModal(true);
  const handleProjectSave = (project) => {
    setProjects([...projects, project]);
    setShowProjectModal(false);
  };
  const handleProjectDelete = (id) => setProjects(projects.filter((project) => project.id !== id));

  const handleBlogAdd = () => setShowBlogModal(true);
  const handleBlogSave = (post) => {
    setBlogPosts([...blogPosts, post]);
    setShowBlogModal(false);
  };
  const handleBlogDelete = (id) => setBlogPosts(blogPosts.filter((post) => post.id !== id));

  const handleNavigation = (page) => setCurrentPage(page);

  return (
    <div className="container mx-auto py-8">
      {/* Homepage */}
      {currentPage === 'home' && (
        <>
          <section className="mb-8">
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <div className="flex items-center">
                  <Github size={40} className="mr-4" />
                  <CardTitle>Cybersecurity Portfolio</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {/* Other content */}
              </CardContent>
              <CardFooter>
                {/* Navigation buttons */}
              </CardFooter>
            </Card>
          </section>
        </>
      )}

      {/* Projects Page */}
      {currentPage === 'projects' && (
        <section className="mb-8">
          <Card className="bg-gray-800 text-white">
            {/* Projects header, content, and modal */}
          </Card>
          {showProjectModal && (
            <AlertDialog>
              <AlertDialogHeader>
                <AlertDialogTitle>Add a New Project</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogContent>
                {/* Form fields */}
              </AlertDialogContent>
              <AlertDialogAction type="cancel" onClick={() => setShowProjectModal(false)}>
                <Eye size={16} className="mr-2" />
                Cancel
              </AlertDialogAction>
              <AlertDialogAction type="confirm" onClick={() => handleProjectSave({
                id: projects.length + 1,
                title: 'New Project',
                description: 'Add a new project description here',
                status: 'In Progress',
                outcome: 'To be determined'
              })}>
                <Codesandbox size={16} className="mr-2" />
                Save Project
              </AlertDialogAction>
            </AlertDialog>
          )}
        </section>
      )}

      {/* Blog Page */}
      {currentPage === 'blog' && (
        <section className="mb-8">
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Blog Posts</CardTitle>
                <button className="btn btn-primary" onClick={handleBlogAdd}>
                  <Plus size={16} className="mr-2" />
                  Add Blog Post
                </button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Blog post cards */}
            </CardContent>
          </Card>

          {showBlogModal && (
            <AlertDialog>
              <AlertDialogHeader>
                <AlertDialogTitle>Add a New Blog Post</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogContent>
                {/* Blog form fields */}
              </AlertDialogContent>
              <AlertDialogAction type="cancel" onClick={() => setShowBlogModal(false)}>
                <Eye size={16} className="mr-2" />
                Cancel
              </AlertDialogAction>
              <AlertDialogAction type="confirm" onClick={() => handleBlogSave({
                id: blogPosts.length + 1,
                title: 'New Blog Post',
                description: 'Add a new blog post description here',
                category: 'Other'
              })}>
                <Codesandbox size={16} className="mr-2" />
                Save Blog Post
              </AlertDialogAction>
            </AlertDialog>
          )}
        </section>
      )}
    </div>
  );
};
