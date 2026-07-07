"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  CalendarDays,
  MessageSquare,
  Globe,
  Users,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: LayoutGrid, href: "/dashboard", label: "Dashboard" },
  { icon: CalendarDays, href: "/dashboard/events", label: "Events" },
  { icon: MessageSquare, href: "/dashboard/messages", label: "Messages" },
  { icon: Globe, href: "/dashboard/marketplace", label: "Marketplace" },
  { icon: Users, href: "/dashboard/users", label: "Users" },
  { icon: Settings, href: "/dashboard/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-[70px] flex-col items-center justify-center rounded-[36px] bg-white py-2 shadow-sm overflow-visible">
      <nav className="flex flex-col items-center gap-1">
        {navItems.map(({ icon: Icon, href, label }) => {
          const active = pathname === href;
          return (
            <div key={href} className="relative group/item">
              <Link
                href={href}
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  active
                    ? "bg-[#1D1B17] text-white"
                    : "text-gray-400 group-hover/item:bg-gray-100 group-hover/item:text-gray-700"
                }`}
              >
                <Icon size={22} />
              </Link>
              {!active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-50 opacity-0 pointer-events-none group-hover/item:opacity-100">
                  <div className="h-12 bg-[#1D1B17] text-white text-base font-medium rounded-full pl-2.5 pr-4 flex items-center gap-2.5 whitespace-nowrap shadow-lg">
                    <Icon size={22} className="flex-shrink-0" />
                    {label}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
