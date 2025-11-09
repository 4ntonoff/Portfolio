import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/20 transition-all duration-300 print:bg-white print:border-gray-300">
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <CardTitle className="text-base font-semibold text-white print:text-black">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-blue-300 print:hover:text-blue-600 transition-colors duration-200"
              >
                {title}
                <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline text-gray-300 print:visible print:text-gray-600">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs text-gray-300 print:text-gray-600 print:text-[10px]">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] bg-white/10 text-white hover:bg-white/20 print:bg-transparent print:text-black print:border print:border-black print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
