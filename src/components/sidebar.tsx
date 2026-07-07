"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  CalendarDays,
  MessageSquare,
  Globe,
  Users,
  HelpCircle,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: LayoutGrid, href: "/dashboard", label: "Dashboard" },
  { icon: CalendarDays, href: "/dashboard/events", label: "Events" },
  { icon: MessageSquare, href: "/dashboard/messages", label: "Messages" },
  { icon: Globe, href: "/dashboard/marketplace", label: "Marketplace" },
  { icon: Users, href: "/dashboard/users", label: "Users" },
  { icon: HelpCircle, href: "/dashboard/help", label: "Help" },
  { icon: Settings, href: "/dashboard/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-[70px] flex-col items-center justify-center rounded-[36px] bg-white py-2 shadow-sm overflow-visible">
      <nav className="flex flex-col items-center gap-0.5">
        {navItems.map(({ icon: Icon, href, label }) => {
          const active = pathname === href;
          return (
            <div key={href} className="relative group/item">
              <Link
                href={href}
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  active
                    ? "bg-[#1D1B17] text-white"
                    : "text-gray-400 group-hover/item:bg-gray-100 group-hover/item:text-gray-700"
                }`}
              >
                <Icon size={20} />
              </Link>
              {!active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-50 opacity-0 pointer-events-none group-hover/item:opacity-100">
                  <div className="h-11 bg-gray-200 text-gray-700 text-sm font-medium rounded-full pl-2 pr-4 flex items-center gap-2.5 whitespace-nowrap shadow-lg">
                    <div className="h-7 w-7 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={16} />
                    </div>
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
