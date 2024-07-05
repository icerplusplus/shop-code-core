import { IconType } from "react-icons/lib";
import {
  VscCreditCard,
  VscFileCode,
  VscGear,
  VscGithubAlt,
} from "react-icons/vsc";

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface DynamicParamsProps { params: { slug: string } }

interface Dashboard {
  topContent: Menu[];
  centerContent: Menu[];
  bottomContent: Menu[];
}
interface Menu 
  {
    icon: IconType;
    title: string;
    link: string;
  }


export const menus: Dashboard = {
  topContent: [
    {
      title: "Source Code",
      link: "/",
      icon: VscFileCode,
    },
    {
      title: "Balance",
      link: "/balance",
      icon: VscCreditCard,
    },
    {
      title: "Source Code 2",
      link: "/source-2",
      icon: VscFileCode,
    },
    {
      title: "Balance 2",
      link: "/balance-2",
      icon: VscCreditCard,
    },
  ],
  centerContent: [
    {
      title: "Source Code 3",
      link: "/source-3",
      icon: VscFileCode,
    },
    {
      title: "Balance 3",
      link: "/balance-3",
      icon: VscCreditCard,
    },
    {
      title: "Source Code 4",
      link: "/source-4",
      icon: VscFileCode,
    },
    {
      title: "Balance 4",
      link: "/balance-4",
      icon: VscCreditCard,
    },
  ],
  bottomContent: [
    {
      title: "Account",
      link: "/account",
      icon: VscGithubAlt,
    },
    {
      title: "Setting",
      link: "/setting",
      icon: VscGear,
    },
  ],
};

export const bgLinearButton = 'bg-gradient-to-br from-[#0A274E] to-[#06438F]'