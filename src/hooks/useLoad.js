import { useEffect, useRef } from "react";

export function useLoad(isPostLoading, clause, refItem, callback) {
    let observer = useRef();
    
    useEffect(() => {
        if (isPostLoading) return;
        if (observer.current) observer.current.disconnect()
    
        observer.current = new IntersectionObserver((entries) => {
          if (clause) return;
          
          if (entries[0].isIntersecting) {
            callback()
          }
        });
        observer.current.observe(refItem.current)
      }, [isPostLoading])
}