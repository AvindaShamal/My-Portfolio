import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  iconSrc?: string; // Optional image/icon URL
  className?: string;
}

const   SkillBadge: React.FC<SkillBadgeProps> = ({ name, iconSrc, className }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-base font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transform transition-transform duration-200 hover:scale-105 shadow-sm border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/50",
        className
      )}
    >
      {iconSrc && (
        <img src={iconSrc} alt={`${name} icon`} className="w-5 h-5" />
      )}
      {name}
    </button>
  );
};

export default SkillBadge;
