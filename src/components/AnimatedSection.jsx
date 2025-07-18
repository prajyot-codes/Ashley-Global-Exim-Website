import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ 
  children, 
  animation = 'up', 
  className = '', 
  delay = 0 
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  const getAnimationClass = () => {
    switch (animation) {
      case 'left':
        return 'animate-on-scroll-left';
      case 'right':
        return 'animate-on-scroll-right';
      case 'zoom':
        return 'animate-on-scroll-zoom';
      default:
        return 'animate-on-scroll';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? 'animate' : ''} ${className}`}
      style={{ 
        transitionDelay: `0.3ms`,
        // animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
