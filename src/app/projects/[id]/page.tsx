import React from "react";
import { projects } from "@/data/projects";
import ProjectDetailContent from "./ProjectDetailContent";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { id } = await props.params;
  return <ProjectDetailContent id={id} />;
}
