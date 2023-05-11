import React from 'react';
import Image from 'next/image';

import { NavItem } from '@/components/NavItem';
import { Dashboard } from '@/components/Dashboard';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-slate-900 w-72 min-h-screen py-6 px-8">
        <Image src="/logo.svg" alt="Whalegarden logo" width="224" height="32" priority />
        <nav>
          <ul className="flex flex-col space-y-2 -mx-4 mt-8">
            <NavItem href="#">Dashboard</NavItem>
            <NavItem href="#">Cloud Accounts</NavItem>
            <NavItem href="#">Inventory</NavItem>
          </ul>
        </nav>
      </aside>
      <main className="w-full">
        <Dashboard />
      </main>
    </div>
  )
}
