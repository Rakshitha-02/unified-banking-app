import React, { type ReactNode } from 'react';
import { cn } from "../../lib/utils";


export interface Transaction {
  id: string;
  title: string;
  description?: string;
  amount: number;
  date: string;
  type: 'credit' | 'debit';
  status?: 'completed' | 'pending' | 'failed';
  icon?: ReactNode;
  category?: string;
}

interface TransactionItemProps {
  transaction: Transaction;
  className?: string;
  onClick?: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  className,
  onClick,
}) => {
  const { title, description, amount, date, type, status, icon } = transaction;

  const isPositive = type === 'credit';
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    signDisplay: 'never',
  }).format(Math.abs(amount));

  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center justify-between py-3 px-1 transition-colors hover:bg-gray-50/50 rounded-xl cursor-pointer',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600">
          {icon || <div className="h-5 w-5 bg-gray-300 rounded-full" />}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900 leading-tight">{title}</span>
          <span className="text-xs text-gray-500 mt-0.5">
            {description || date}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span
          className={cn(
            'text-sm font-semibold',
            isPositive ? 'text-emerald-600' : 'text-gray-900'
          )}
        >
          {isPositive ? '+' : '-'}{formattedAmount}
        </span>
        {status === 'pending' && (
          <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-500 mt-1">
            Pending
          </span>
        )}
      </div>
    </div>
  );
};

export default TransactionItem;
