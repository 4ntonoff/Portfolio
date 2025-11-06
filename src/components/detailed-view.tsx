"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import {
  GlobeIcon,
  MailIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  DownloadIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { type ResumeData } from "@/lib/data";
import { addIconsToResumeData } from "@/lib/icons-mapper";
import { useMemo } from "react";

interface DetailedViewProps {
  data: ResumeData;
}

/**
 * Client Component for rendering the detailed portfolio view
 * Data is fetched on the server and passed as props
 */
export function DetailedView({ data: rawData }: DetailedViewProps) {
  // Add icons to the data on the client side
  const data = useMemo(() => addIconsToResumeData(rawData), [rawData]);
  return (
    <main className="container relative mx-auto min-h-screen scroll-my-12 overflow-auto p-4 sm:p-6 md:p-16 print:bg-white print:p-12 backdrop-blur-xl">
      <section className="mx-auto w-full max-w-3xl space-y-10 rounded-2xl backdrop-blur-xl text-white print:bg-white print:text-black">
        <div className="flex items-start justify-between gap-8 rounded-xl border border-white/20 bg-black/50 p-4 backdrop-blur-md">
          <div className="flex-1 space-y-2.5">
            <h1 className="text-3xl font-bold tracking-tight">
              {data.name}
            </h1>
            <p className="max-w-md text-pretty font-mono text-sm text-gray-300 print:text-gray-600 print:text-[12px]">
              {data.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-gray-400 print:text-gray-600">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={data.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {data.location}
              </a>
            </p>

            <div className="flex flex-col gap-3 pt-4 print:hidden">
              <div className="flex items-center gap-x-1 font-mono text-sm text-gray-400">
                {data.contact.email ? (
                  <Button
                    className="h-8 w-8 hover:bg-white/20"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${data.contact.email}`}>
                      <MailIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
                {data.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="h-8 w-8 hover:bg-white/20"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} target="_blank">
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
                {data.contact.resumeUrl ? (
                  <Button
                    className="h-8 w-8 hover:bg-white/20 border-white/20"
                    variant="outline"
                    size="icon"
                    asChild
                    title="Download Resume"
                  >
                    <a href={data.contact.resumeUrl} download>
                      <DownloadIcon className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="hidden flex-col gap-x-1 font-mono text-sm text-gray-600 print:flex print:text-[12px]">
              {data.contact.email ? (
                <a href={`mailto:${data.contact.email}`}>
                  <span className="underline">
                    {data.contact.email}
                  </span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="hidden h-32 w-32 rounded-xl border-2 border-white/20 md:block">
            <AvatarImage
              alt={data.name}
              src={data.avatarUrl}
              className="rounded-xl"
            />
            <AvatarFallback>{data.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-gray-300 print:text-gray-600 print:text-[12px]">
            {" "}
            {data.summary}
          </p>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Key Highlights</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-4 print:gap-2">
            {data.keyHighlights?.map((point) => (
              <Card
                key={point.title}
                className="flex flex-col items-start gap-2 bg-black/40 backdrop-blur-md border-white/20 p-4 hover:bg-black/50 transition-colors"
              >
                <div className="text-2xl">{point.icon}</div>
                <div>
                  <h3 className="font-semibold text-white print:text-black">{point.title}</h3>
                  <p className="text-sm text-gray-300 print:text-gray-600">
                    {point.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {data.work.map((work) => {
            return (
              <Card key={work.company} className="bg-black/40 backdrop-blur-md border-white/20 hover:bg-black/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs bg-black/50 text-white hover:bg-black/70 print:px-1 print:py-0.5 print:text-[8px] print:leading-tight print:bg-transparent"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-400">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none text-gray-300 print:text-gray-700 print:text-[12px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2">
                  <p className="mb-2 text-xs text-gray-300 print:text-gray-600 print:text-[10px]">
                    {work.description}
                  </p>
                  {work.bulletPoints && work.bulletPoints.length > 0 && (
                    <ul className="mt-2 text-xs text-gray-300 print:text-gray-600 print:text-[10px]">
                      {work.bulletPoints.map((point: any, index: number) => (
                        <li
                          key={index}
                          className="mb-1 flex items-center gap-x-2"
                        >
                          <ArrowRightIcon className="h-3 w-3 flex-shrink-0 text-gray-500" />
                          <span className="flex items-center gap-x-1">
                            {point.text}
                            {point.link && (
                              <a
                                href={point.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center hover:text-blue-300"
                              >
                                <ExternalLinkIcon className="ml-1 h-3 w-3" />
                              </a>
                            )}
                            {point.links && point.links.length > 0 && (
                              <span className="ml-1 flex items-center space-x-1">
                                {point.links.map(
                                  (
                                    link: { name: string; url: string },
                                    linkIndex: number,
                                  ) => (
                                    <a
                                      key={linkIndex}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center hover:text-blue-300"
                                      title={link.name}
                                    >
                                      <ExternalLinkIcon className="h-3 w-3" />
                                    </a>
                                  ),
                                )}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {data.education.map((education) => {
            return (
              <Card key={education.school} className="bg-black/40 backdrop-blur-md border-white/20 hover:bg-black/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none text-white print:text-black">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-400">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-gray-300 print:text-gray-600 print:text-[12px]">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="space-y-4">
            {data.skills.map((skillCategory) => (
              <div key={skillCategory.name}>
                <h3 className="mb-2 text-sm font-semibold text-gray-300 print:text-gray-700">
                  {skillCategory.name}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {skillCategory.items.map((skill) => (
                    <Badge className="bg-black/50 text-white hover:bg-black/70 print:bg-transparent print:text-black print:border print:border-black print:text-[10px]" key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {data.projects?.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">
            Achievements & Honourable Mentions
          </h2>
          {data.achievements.map((achievement) => {
            return (
              <Card key={achievement.title} className="bg-black/40 backdrop-blur-md border-white/20 hover:bg-black/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="flex items-center gap-x-2 font-semibold leading-none text-white print:text-black">
                      {achievement.title}
                      {achievement.reference.map((ref) => (
                        <a
                          key={ref.url}
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center transition-colors duration-200 hover:text-blue-300"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                        </a>
                      ))}
                    </h3>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: data.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...data.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
