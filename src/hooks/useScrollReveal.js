import { useState, useEffect, useRef } from "react";

const useScrollReveal = (options = {}) => {
     const ref = useRef(null);
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          const observer = new IntersectionObserver(
               ([entry]) => {
                    if (entry.isIntersecting) {
                         setIsVisible(true);
                    }
               },
               {
                    threshold: options.threshold || 0.15,
                    rootMargin: options.rootMargin || '0px'
               }
          );

          const currentRef = ref.current;
          if (currentRef) {
               observer.observe(currentRef);
          }

          return () => {
               if (currentRef) {
                    observer.unobserve(currentRef);
               }
          };
     }, [options.threshold, options.rootMargin]);

     return [ref, isVisible];
};

export default useScrollReveal;