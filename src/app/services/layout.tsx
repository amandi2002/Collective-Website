import type { ReactNode } from "react";

/**
 * Service routes use a solid white page shell (see globals.css `.mainContent:has(.services-route)`).
 */
export default function ServicesLayout({ children }: { children: ReactNode }) {
    return <div className="services-route">{children}</div>;
}
