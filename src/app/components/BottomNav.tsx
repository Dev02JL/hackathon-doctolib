"use client";
import Link from "next/link";
import NewsIcon from "./icons/NewsIcon";
import HomeIcon from "./icons/HomeIcon";
import CalendarIcon from "./icons/CalendarIcon";
import HealthIcon from "./icons/HealthIcon";
import MessageIcon from "./icons/MessageIcon";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  icon: string;
  active?: boolean;
};

const items: NavItem[] = [
  { href: "/", label: "Accueil", icon: "custom:home" },
  { href: "/rdv", label: "Rendez-vous", icon: "custom:calendar" },
  { href: "/health", label: "Santé", icon: "custom:health" },
  { href: "/messages", label: "Messages", icon: "custom:message" },
  { href: "/news", label: "Nouveautés", icon: "custom:news" },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur shadow-[0_-2px_12px_rgba(0,0,0,0.08)] border-t border-nightshift/10 md:hidden">
      <ul className="grid grid-cols-5 text-center text-sm">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.label} className="py-3">
              <Link href={item.href} className="flex flex-col items-center gap-1" aria-current={isActive ? "page" : undefined}>
                <span aria-hidden className={isActive ? "text-oxylove" : "text-nightshift"}>
                  {item.icon === "custom:home" && <HomeIcon />}
                  {item.icon === "custom:calendar" && <CalendarIcon />}
                  {item.icon === "custom:health" && <HealthIcon />}
                  {item.icon === "custom:message" && <MessageIcon />}
                  {item.icon === "custom:news" && <NewsIcon />}
                </span>
                <span className={isActive ? "text-oxylove font-semibold text-xs" : "text-nightshift/90 text-xs"}>
                {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


