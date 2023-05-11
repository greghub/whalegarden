"use client";
import React from 'react';

import { Dropdown, DropdownItemType } from '@/components/Dropdown';
import { InfoCard } from '@/components/InfoCard';

import { Account, NonEmptyArray, TrendType } from '@/utils/types';

import { useGetAccounts, useGetAccount, useGetAccountHistory } from '@/utils/api';
import { Loader } from './Loader';

import dynamic from "next/dynamic";

const SpendingsByMonth = dynamic(() => import("../components/charts/SpendingsByMonth").then((mod) => mod.SpendingsByMonth), { ssr: false });
const SpendingsByService = dynamic(() => import("../components/charts/SpendingsByService").then((mod) => mod.SpendingsByService), { ssr: false });


export function Dashboard() {
  const [selectedAccount, setSelectedAccount] = React.useState<Account | null>(null);
  const { accounts, isLoading: isLoadingAccounts } = useGetAccounts();

  const { account, isLoading: isLoadingAccount } = useGetAccount(selectedAccount?.id ?? accounts?.[0].id ?? null);
  const { accountHistory, isLoading: isLoadingAccountHistory } = useGetAccountHistory(selectedAccount?.id ?? accounts?.[0].id ?? null);

  const accountsData = accounts?.map((account: { id: string, provider: string, label: string, logo: string }) => ({
    id: account.id,
    label: account.provider,
    description: account.label,
    icon: account.logo,
  }));

  if (isLoadingAccounts || isLoadingAccount || isLoadingAccountHistory) {
    return <Loader />
  }

  return (
    <>
      <header className="bg-slate-200 h-18 py-6 px-8 flex items-center">
        <div className="flex items-center text-sm">
          <span className="text-slate-600">Accounts</span>
          <div className="ml-6 mr-3 mt-0.5 w-px h-4 bg-slate-400 rotate-[30deg]"></div>
          {accountsData && <Dropdown items={accountsData as NonEmptyArray<DropdownItemType>} onSelect={(account: Account) => setSelectedAccount(account)} />}
        </div>
      </header>
      <section className="p-8">
        <div className="grid grid-cols-4 gap-4">
          {account && Object.keys(account).map((key) =>
            <InfoCard key={key} title={key} value={account[key]} prefix={key === 'bill' ? '$' : undefined} isDanger={key === 'alarms' && account[key] > 0} trend={key === 'bill' ? '+25%' : undefined} trendType={TrendType.NEGATIVE} />
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12">
          <SpendingsByMonth data={accountHistory} />
          <SpendingsByService data={accountHistory} />
        </div>
      </section >
    </>
  )
};

