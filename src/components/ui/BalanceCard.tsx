import React from 'react';
import Card, { CardContent } from './Card';
import { cn } from "../../lib/utils";


interface BalanceCardProps {
  title: string;
  balance: number;
  currency?: string;
  trend?: {
    value: number;
    isPositive: boolean;
    label?: string;
  };
  accountNumber?: string;
  className?: string;
  dark?: boolean;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  balance,
  currency = '$',
  trend,
  accountNumber,
  className,
  dark = false,
}) => {
  const formattedBalance = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  return (
    <Card
      className={cn(
        'overflow-hidden transition-all',
        dark
          ? 'bg-gray-900 text-white border-gray-800'
          : 'bg-white text-gray-900 border-gray-100',
        className
      )}
      elevated
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className={cn("text-sm font-medium mb-1", dark ? "text-gray-400" : "text-gray-500")}>
              {title}
            </p>
            {accountNumber && (
              <p className={cn("text-xs font-mono", dark ? "text-gray-500" : "text-gray-400")}>
                •••• {accountNumber.slice(-4)}
              </p>
            )}
          </div>
          {/* Logo or Icon could go here */}
        </div>

        <div className="mb-2">
          <h2 className="text-4xl font-semibold tracking-tight">
            <span className={cn("text-2xl mr-1 align-top", dark ? "text-gray-400" : "text-gray-400")}>{currency}</span>
            {formattedBalance}
          </h2>
        </div>

        {trend && (
          <div className="flex items-center text-sm mt-4">
            <span
              className={cn(
                "inline-flex items-center px-1.5 py-0.5 rounded-md font-medium text-xs",
                trend.isPositive
                  ? dark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"
                  : dark ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600"
              )}
            >
              {trend.isPositive ? '+' : '-'}
              {currency}{Math.abs(trend.value).toFixed(2)}
            </span>
            {trend.label && (
              <span className={cn("ml-2 text-xs", dark ? "text-gray-400" : "text-gray-500")}>
                {trend.label}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
