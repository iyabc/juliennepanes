import { Octokit } from '@octokit/core';
import { NextResponse } from 'next/server';

const username = process.env.GITHUB_USERNAME;
const octokit = new Octokit({ auth: process.env.GITHUB_OCTO_KIT_API_KEY });

const fetchFeaturedProjectsFromREADME = async () => {
  try {
    const response = await octokit.request(
      'GET /repos/{owner}/{repo}/contents/{path}',
      {
        owner: username,
        repo: username,
        path: 'README.md',
        headers: { 'X-GitHub-Api-Version': '2022-11-28' },
      },
    );

    const file = response.data as { content: string };
    const content = Buffer.from(file.content, 'base64').toString('utf-8');

    const featuredMatch = content.match(
      /#+\s*Featured([\s\S]*?)(?=\n#+\s|\s*$)/i,
    );
    if (!featuredMatch) return null;

    const section = featuredMatch[1];
    const entryRegex =
      /\[<img[^>]*?alt="([^"]*)"[^>]*?src="([^"]+)"[^>]*?\/?>\]\(https?:\/\/github\.com\/([^/]+)\/([^\s)\]"']+)\)/g;

    const featured = [];

    let match;

    while ((match = entryRegex.exec(section)) !== null) {
      featured.push({
        title: match[1],
        imageUrl: match[2],
        owner: match[3],
        name: match[4].replace(/\.git$/, ''),
      });
    }

    return featured.length > 0 ? featured : null;
  } catch {
    return null;
  }
};

const fetchRepoDetails = async (owner, name) => {
  const response = await octokit.request('GET /repos/{owner}/{repo}', {
    owner,
    repo: name,
    headers: { 'X-GitHub-Api-Version': '2022-11-28' },
  });
  return {
    description: response.data.description,
    homepage: response.data.homepage,
    topics: response.data.topics ?? [],
  };
};

const fetchFeaturedProjects = async (projects) => {
  return Promise.all(
    projects.map(async (project) => {
      const details = await fetchRepoDetails(project.owner, project.name);
      return { ...project, ...details };
    }),
  );
};

export async function GET() {
  try {
    const fromReadMe = await fetchFeaturedProjectsFromREADME();
    const featured = await fetchFeaturedProjects(fromReadMe ?? []);

    const mapped = featured.map((project) => ({
      name: project.name,
      title: project.title,
      description: project.description,
      url: project.homepage,
      technologies: project.topics,
      imageUrl: project.imageUrl,
    }));

    return NextResponse.json(mapped);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
