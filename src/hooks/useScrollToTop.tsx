import { useEffect } from "react";

export function UseScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
