
import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  
  useEffect(() => {
    // Get current visitor count from localStorage
    const storedCount = localStorage.getItem('visitor-count');
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment count only if this is a new session
    if (!sessionStorage.getItem('counted-visit')) {
      const newCount = currentCount + 1;
      localStorage.setItem('visitor-count', newCount.toString());
      sessionStorage.setItem('counted-visit', 'true');
      setVisitorCount(newCount);
    } else {
      setVisitorCount(currentCount);
    }
  }, []);
  
  return (
    <div className="flex items-center gap-1.5">
      <Users size={16} className="text-muted-foreground" />
      <Badge variant="secondary" className="text-xs font-medium">
        {visitorCount} visitor{visitorCount !== 1 ? 's' : ''}
      </Badge>
    </div>
  );
};
