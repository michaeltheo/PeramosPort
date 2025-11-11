import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * AOS (Animate On Scroll) Configuration
 * Adjust these settings to match your design preferences
 */
export const AOS_CONFIG = {
  // Animation duration in milliseconds
  duration: 600,

  // Animation easing function
  // Options: 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out',
  //          'ease-in-back', 'ease-out-back', 'ease-in-out-back',
  //          'ease-in-sine', 'ease-out-sine', 'ease-in-out-sine',
  //          'ease-in-quad', 'ease-out-quad', 'ease-in-out-quad',
  //          'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic'
  easing: "ease-out-cubic",

  // Whether animation should happen only once
  // true = animate only once when scrolling down
  // false = animate every time element enters viewport
  once: false,

  // Whether elements should animate out while scrolling past them
  mirror: false,

  // Offset (in px) from the original trigger point
  offset: 120,

  // Delay animation (ms)
  delay: 0,

  // Anchor placement - defines which position of element should trigger animation
  // Options: 'top-bottom', 'top-center', 'top-top',
  //          'center-bottom', 'center-center', 'center-top',
  //          'bottom-bottom', 'bottom-center', 'bottom-top'
  anchorPlacement: "top-bottom",

  // Disable AOS on specific conditions
  // false = enabled everywhere
  // 'mobile' = disabled on mobile devices
  // 'phone' = disabled on phones only
  // 'tablet' = disabled on tablets only
  // function = custom disable condition, return true to disable
  disable: false,

  // Performance optimization: if true, AOS will start disabled and enable on scroll
  startEvent: "DOMContentLoaded",

  // Class applied on animation
  animatedClassName: "aos-animate",

  // Class applied after initialization
  initClassName: "aos-init",

  // Using debounce on resize observer
  debounceDelay: 50,

  // Throttle delay on scroll
  throttleDelay: 99,
} as const;

/**
 * Hook to initialize AOS (Animate On Scroll) globally
 *
 * Should be called ONCE at the app root level, inside your Router
 *
 * @example
 * // In App.tsx
 * import { useAOS } from '@/hooks/useAOS';
 *
 * function AppContent() {
 *   useAOS(); // Initialize AOS once here
 *
 *   return (
 *     <div>
 *       <Header />
 *       <Routes>...</Routes>
 *     </div>
 *   );
 * }
 *
 * function App() {
 *   return (
 *     <Router>
 *       <AppContent />
 *     </Router>
 *   );
 * }
 */
export const useAOS = () => {
  useEffect(() => {
    // Initialize AOS with configuration
    AOS.init(AOS_CONFIG);

    // Cleanup on unmount
    return () => {
      // Optional: refresh AOS to clean up
      AOS.refresh();
    };
  }, []);
};

/**
 * Utility function to manually refresh AOS
 *
 * Call this after dynamically adding content to the page
 * (e.g., after loading data from API, adding items to a list, etc.)
 *
 * @example
 * import { refreshAOS } from '@/hooks/useAOS';
 *
 * function DynamicContent() {
 *   const [items, setItems] = useState([]);
 *
 *   useEffect(() => {
 *     fetchItems().then(newItems => {
 *       setItems(newItems);
 *       refreshAOS(); // Refresh AOS to detect new elements
 *     });
 *   }, []);
 *
 *   return (
 *     <div>
 *       {items.map(item => (
 *         <div key={item.id} data-aos="fade-up">
 *           {item.content}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * }
 */
export const refreshAOS = () => {
  AOS.refresh();
};

/**
 * Utility function to force re-initialize AOS
 *
 * Use this if you need to completely re-initialize AOS
 * (rarely needed, but available if you change configuration dynamically)
 */
export const reinitAOS = () => {
  AOS.init(AOS_CONFIG);
};
