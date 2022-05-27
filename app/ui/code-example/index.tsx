import Editor from "@monaco-editor/react";

type Props = {
  code: string;
  language?: string
  width?: string;
};

export function CodeExample({ code, language = 'typescript', width = "100%" }: Props) {
  const trimmedCode = code.trim();
  const lines = trimmedCode.split('\n').length
  const height = lines * 36 + 58;

  return (
    <Editor
      className="rounded-3xl over overflow-hidden"
      width={width}
      height={height}
      defaultLanguage={language}
      defaultValue={trimmedCode}
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
      }}
    />
  );
}
