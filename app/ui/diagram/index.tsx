import { useEffect } from "react";
import type MermaidApi from 'mermaid/mermaidAPI';

type Props = {
  nodes: string;
}

export function Diagram({ nodes }: Props) {
  useEffect(() => {
    const init = async () => {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({
      theme: 'dark' as MermaidApi.Theme,
      themeVariables: {
        fontFamily: 'Architects Daughter',
        fontSize: '24px'
      },
      // @ts-expect-error types are wrong
      gitGraph: {
        showCommitLabel: false
      }
    });
    mermaid.contentLoaded()
  }
  init();
  }, []);

  return (
    <div className="mermaid">
      {nodes.trim()}
    </div>
  );
}