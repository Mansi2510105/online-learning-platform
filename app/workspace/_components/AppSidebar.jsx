"use client"
import React from 'react'
import { LayoutDashboard, Book, Compass, PencilRulerIcon, UserCircle2Icon, WalletCards, Sparkle } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../../../components/ui/sidebar";
import { Button } from "../../../components/ui/button"
import Image from 'next/image';
import Link from 'next/link';
import AddNewCourseDialog from "../_components/AddNewCourseDialog"

const SideBarOptions=[
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: '/workspace'
  },
  {
    title: 'My Learning',
    icon: Book,
    path: '/workspace/my-learning'
  },
  {
    title: 'Explore Courses',
    icon: Compass,
    path: '/workspace/explore'
  },
  {
    title: 'AI Tools',
    icon: PencilRulerIcon,
    path: '/workspace/aiTools'
  },
  {
    title: 'Billing',
    icon: WalletCards,
    path: '/workspace/billing'
  },
  {
    title: 'Profile',
    icon: UserCircle2Icon,
    path: '/workspace/profile'
  }
]

function AppSidebar() {

  const path=usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        {/* <Image src={'/logo.svg'} alt='logo' width={120} height={80} /> */}
        <Link href="/workspace" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
            <Sparkle className="text-white w-6 h-6 fill-white/20" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            SmartEd
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AddNewCourseDialog><Button>Create New Course</Button></AddNewCourseDialog>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SideBarOptions.map((item,index)=>(
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className={'p-5'}>
                    <Link href={item.path} className={`text-[17px] ${path.includes(item.path)&&'text-primary bg-purple-50'}`}>
                    <item.icon className='h-7 w-7' />
                    <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
