import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { runCode } from '../compiler/script';

const EditorComponent = ({ onRun, language, filename, codeTemplate }) => {
  const [code, setCode] = useState(codeTemplate);
  const [output, setOutput] = useState('// Output will appear here');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleOutputChange = (value) => {
    setOutput(value);
  };

  const run = () => {
    runCode(code, language, setOutput, output);
  };

  useEffect(() => {
    if (onRun) {
      onRun(run);
    }
  }, [onRun, run]);

  useEffect(() => {
    setCode(codeTemplate);
  }, [codeTemplate]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row h-full">
        {/* Code Section */}
        <div className="flex-1 bg-gray-800 text-white p-0 border-r border-gray-800">
          <div className="bg-gray-900 text-white flex items-center p-3">
            <div className="mr-4">{filename}</div>
            <div className="flex-1"></div>
          </div>
          <Editor
            height="93%" // Set the height of the code editor
            defaultLanguage={language.toLowerCase()} // Set the default language for syntax highlighting
            value={code}
            theme="vs-dark" // Set the theme for the code editor
            onChange={handleEditorChange}
          />
        </div>

        {/* Output Section */}
        <div className="flex-1 bg-gray-800 text-white p-0">
          <div className="bg-gray-900 text-white flex items-center p-3">
            <div className="mr-4">Output</div>
            <div className="flex-1"></div>
          </div>
          <Editor
            height="93%" // Set the height of the code editor
            value={output}
            theme="vs-dark" // Use the same theme as the code editor
            onChange={handleOutputChange}
            options={{ readOnly: false }} // Make the output editor read-write
          />
        </div>
      </div>
    </div>
  );
};

export default EditorComponent;
