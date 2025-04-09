
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, className }) => {
  return (
    <div className={cn(
      "badge bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors",
      className
    )}>
      {name}
    </div>
  );
};

export default SkillBadge;
