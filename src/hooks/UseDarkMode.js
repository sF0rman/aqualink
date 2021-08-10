import { useState } from "react";

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);
  return isDark;
}

export default useDarkMode;