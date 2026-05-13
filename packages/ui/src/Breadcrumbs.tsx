import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs?: Crumb[];
  items?: Crumb[];
}

export function Breadcrumbs({ crumbs, items }: BreadcrumbsProps) {
  const list = crumbs ?? items ?? [];
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500">
        <li>
          <a href="/" className="flex items-center gap-1 hover:text-red-700 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </a>
        </li>
        {list.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            {crumb.href && i < list.length - 1 ? (
              <a href={crumb.href} className="hover:text-red-700 transition-colors">
                {crumb.label}
              </a>
            ) : (
              <span className="text-gray-900 font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
