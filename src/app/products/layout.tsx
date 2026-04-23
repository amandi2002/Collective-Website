import type { ReactNode } from "react";

/**
 * Product routes use a pure white canvas (see globals.css `.mainContent:has(.products-route)`).
 */
export default function ProductsLayout({ children }: { children: ReactNode }) {
    return <div className="products-route">{children}</div>;
}
