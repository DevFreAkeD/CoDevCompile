import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { runCode } from '../compiler/script';

const EditorComponent = ({ onRun, language, filename, codeTemplate }) => {
  const [code, setCode] = useState(codeTemplate);
  const [input, setInput] = useState('// Input your data here');
  const [output, setOutput] = useState('// Output will appear here');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleInputChange = (value) => {
    setInput(value);
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
    <div className="flex flex-col">
      <div className="flex flex-row h-auto">
        {/* Code Section */}
        <div className="flex-1 bg-gray-800 text-white p-0 border-r border-gray-800">
          <div className="bg-gray-900 text-white flex items-center p-3">
            <div className="mr-4">{filename}</div>
            <div className="flex-1"></div>
          </div>
          <Editor
            height="92.9%"
            defaultLanguage={language.toLowerCase()}
            value={code}
            theme="vs-dark"
            onChange={handleEditorChange}
          />
        </div>

        {/* Input/Output Section */}
        <div className="flex-1 bg-gray-800 text-white p-0 flex flex-col">
          <div className="bg-gray-900 text-white flex items-center p-3">
            <div className="mr-4">Input</div>
            <div className="flex-1"></div>
          </div>
          <Editor
            height="40%"
            value={input}
            theme="vs-dark"
            onChange={handleInputChange}
          />
          
          <div className="bg-gray-900 text-white flex items-center p-3">
            <div className="mr-4">Output</div>
            <div className="flex-1"></div>
          </div>
          <Editor
            height="52.9%"
            value={output}
            theme="vs-dark"
            onChange={handleOutputChange}
            options={{ readOnly: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorComponent;