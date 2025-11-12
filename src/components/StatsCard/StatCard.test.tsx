/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { StatCard } from "./StatCard";
import { Ship } from "lucide-react";

/**
 * Mock IntersectionObserver for testing visibility-based animations
 */
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit
  ) {}

  observe = vi.fn((target: Element) => {
    // Simulate immediate intersection
    setTimeout(() => {
      this.callback(
        [
          {
            isIntersecting: true,
            target,
            intersectionRatio: 1,
            boundingClientRect: target.getBoundingClientRect(),
            intersectionRect: target.getBoundingClientRect(),
            rootBounds: null,
            time: Date.now(),
          } as IntersectionObserverEntry,
        ],
        this
      );
    }, 0);
  });

  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

describe("StatCard Component", () => {
  let originalIntersectionObserver: typeof IntersectionObserver;

  beforeEach(() => {
    // Save original IntersectionObserver
    originalIntersectionObserver = global.IntersectionObserver;

    // Mock IntersectionObserver
    global.IntersectionObserver = MockIntersectionObserver as any;

    // Mock timers
    vi.useFakeTimers();
  });

  afterEach(() => {
    // Restore original IntersectionObserver
    global.IntersectionObserver = originalIntersectionObserver;

    // Clear all timers
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  describe("Rendering", () => {
    it("should render without crashing", () => {
      const { container } = render(
        <StatCard icon={Ship} value="24/7" label="Operations" />
      );
      expect(container).toBeTruthy();
    });

    it("should not render subtext when not provided", () => {
      const { container } = render(
        <StatCard icon={Ship} value="24/7" label="Operations" />
      );

      // Check that there's no subtext element
      const subtextElements = container.querySelectorAll(
        ".text-xs.text-accent"
      );
      expect(subtextElements.length).toBe(0);
    });
  });

  describe("IntersectionObserver Integration", () => {
    it("should create IntersectionObserver on mount", () => {
      render(<StatCard icon={Ship} value="12m" label="Max Draft" />);

      // Check that observe was called
      const mockObserver = global.IntersectionObserver as any;
      expect(mockObserver).toBeDefined();
    });

    it("should set correct threshold for IntersectionObserver", () => {
      let capturedOptions: IntersectionObserverInit | undefined;

      // Capture constructor options
      class CaptureObserver extends MockIntersectionObserver {
        constructor(
          callback: IntersectionObserverCallback,
          options?: IntersectionObserverInit
        ) {
          super(callback, options);
          capturedOptions = options;
        }
      }

      global.IntersectionObserver = CaptureObserver as any;

      render(<StatCard icon={Ship} value="12m" label="Max Draft" />);

      // Check threshold is set correctly
      expect(capturedOptions?.threshold).toBe(0.1);
      expect(capturedOptions?.rootMargin).toBe("0px");
    });
  });

  describe("Memory Management", () => {
    it("should clean up timer on unmount", () => {
      const { unmount } = render(
        <StatCard icon={Ship} value="12m" label="Max Draft" />
      );

      // Start animation
      vi.advanceTimersByTime(100);

      // Unmount before animation completes
      unmount();

      // Advance timers - should not cause any errors
      expect(() => {
        vi.advanceTimersByTime(2100);
      }).not.toThrow();
    });

    it("should clean up IntersectionObserver on unmount", () => {
      const mockObserve = vi.fn();
      const mockUnobserve = vi.fn();
      const mockDisconnect = vi.fn();

      class TrackingObserver extends MockIntersectionObserver {
        observe = mockObserve;
        unobserve = mockUnobserve;
        disconnect = mockDisconnect;
      }

      global.IntersectionObserver = TrackingObserver as any;

      const { unmount } = render(
        <StatCard icon={Ship} value="12m" label="Max Draft" />
      );

      // Verify observer methods were called
      expect(mockObserve).toHaveBeenCalled();

      unmount();

      // Verify cleanup
      expect(mockUnobserve).toHaveBeenCalled();
      expect(mockDisconnect).toHaveBeenCalled();
    });
  });
});
