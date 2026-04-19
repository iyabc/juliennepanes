import { useState, useEffect } from 'react';

export type Project = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  imageUrl: string | null;
  title: string | null;
};

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/projects');
        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error ?? 'Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return { projects, loading };
};

export default useProjects;
