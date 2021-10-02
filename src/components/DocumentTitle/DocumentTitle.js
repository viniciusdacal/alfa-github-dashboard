import { useEffect } from "react";

export default function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = `Github Dashboard | ${title}`;
  }, [title]);

  return null;
}
