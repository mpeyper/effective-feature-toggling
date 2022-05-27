import { DiffEditor } from "@monaco-editor/react";

type Props = {
  original: string;
  modified: string;
  language?: string
  width?: string;
};

export function DiffExample({ original, modified, language = 'typescript', width = "100%" }: Props) {
  const trimmedOriginal = original.trim();
  const trimmedModified = modified.trim();
  const originalLines = trimmedOriginal.split('\n').length
  const modifiedLines = trimmedModified.split('\n').length
  const height = Math.max(originalLines, modifiedLines) * 36 + 58;

  return (
    <DiffEditor
      className="rounded-3xl over overflow-hidden"
      width={width}
      height={height}
      language={language}
      original={trimmedOriginal}
      modified={trimmedModified}
      theme="vs-dark"
      // beforeMount={(monaco) => {
      //   monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      //     noSemanticValidation: true,
      //   })
      // }}
      options={{
        fontSize: 24,
        padding: {
          top: 24,
          bottom: 24,
        },
        hover: {
          enabled: false,
        },
        minimap: {
          enabled: false,
        },
        renderLineHighlight: 'none',
        scrollBeyondLastLine: false,
        overviewRulerLanes: 0,
        renderSideBySide: false,
        renderOverviewRuler: false,
      }}
    />
  );
}
