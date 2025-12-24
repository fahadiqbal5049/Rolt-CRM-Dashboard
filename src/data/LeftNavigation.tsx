import Agenda from "@/pages/Agenda";
import Assistentes from "@/pages/Assistentes";
import Campaigns from "@/pages/Campaigns";
import Chat from "@/pages/Chat";
import Contacts from "@/pages/Contacts";
import Crm from "@/pages/Crm";
import Dashboard from "@/pages/Dashboard";
import { Settings } from "lucide-react";
import AccessContacts from "@/pages/AccessContacts";
import * as Icons from "../components/ui/shared/Icons";

export const LeftNavigationData = [
  {
    icon: <Icons.dashboard className="w-[12px] h-[12px]" />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <Icons.contact className="w-[17px] h-[17px]" />,
    title: "Contacts",
    path: "/contacts",
  },
  {
    icon: <Icons.chat className="w-[14px] h-[14px]" />,

    title: "Chat",
    path: "/chat",
  },
  {
    icon: <Icons.dashboard className="w-[12px] h-[12px]" />,
    title: "CRM",
    path: "/crm",
  },

  {
    icon: <Icons.assistance className="w-[17px] h-[17px]" />,
    title: "Assistants",
    path: "/assistentes",
  },
  {
    icon: <Icons.compains className="w-[19px] h-[19px]" />,
    title: "Campaigns",
    path: "/campanhas",
  },
];

export const SettingsNavigationData = [
  {
    icon: <Icons.settings className="w-[16px] h-[16px]" />,
    title: "Settings",
    path: "/settings",
  },
  {
    icon: <Icons.logout className="w-[16px] h-[16px]" />,
    title: "Log out",
    path: "/login",
  },
];

export const AuthenticatedRoutes = [
  { path: "/", element: <Dashboard /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/chat", element: <Chat /> },

  { path: "/crm", element: <Crm /> },

  { path: "/agenda", element: <Agenda /> },
  { path: "/assistentes", element: <Assistentes /> },
  { path: "/campanhas", element: <Campaigns /> },
  { path: "/settings", element: <Settings /> },
  { path: "/access-contacts", element: <AccessContacts /> },
];
