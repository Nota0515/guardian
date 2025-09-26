import { useState } from 'react';
import Button from '../components/Buttons'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-markup';  // HTML
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';



const TimeComplexity = () => {
  const [code, setCode] = useState('console.log("hello world")');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [lang, setLang] = useState('js');
  const options = ['js', 'java', 'python', 'cpp'];
  const [menu, setMenu] = useState(false);
  const [analysis, setAnalysis] = useState({
    timeComplexity: '',
    spaceComplexity: '',
    expectedTime: '',
    expectedSpace: ''
  });

  const analyzeCode = () => {
    setIsAnalyzing(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // This is a mock analysis - in a real app, you would send the code to a backend service
      const mockAnalysis = {
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        expectedTime: 'Linear time complexity - The loop runs n times',
        expectedSpace: 'Constant space - Only a fixed number of variables are used'
      };

      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen p-6 text-white">
      <h1 className="font-mainFont text-center font-medium text-3xl bg-gradient-to-r from-n-9 to-n-8 drop-shadow-[0_0_70px_red] text-transparent bg-clip-text mb-4">Code Complexity Analyzer</h1>

      <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm">
        <div className="mb-6">
          <div className='flex items-center mb-2 pb-2'>
            <h1 className="block text-sm font-thin font-mainFont px-1   " >
              Enter your code:
            </h1>
            <div>
              <button onClick={() => setMenu(!menu)} className='ml-2 px-3 border border-white/30 text-white rounded-md font-thin font-mainFont shadow'>
                {lang}
              </button>
              {menu && (
                <div className='absolute mt-2 w-40 bg-black rounded-lg overflow-hidden shadow-lg z-10'>
                  {options.map((item) => (
                    <div
                      key={item}
                      className='px-4 py-2 cursor-pointer active:bg-pink-600/80 hover:bg-pink-700/80'
                      onClick={() => {
                        setLang(item)
                        setMenu(false)
                      }}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => highlight(code, languages[lang], 'javascript')}
              padding={16}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
                minHeight: '200px',
                color: '#e2e8f0',
                backgroundColor: '#111827', 
              }}
              className="rounded-lg no-editor-focus"
            />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <Button className="px-10 text-sm font-mainFont h-10 rounded-xl border border-pink-500/30 bg-pink-950 md:bg-pink-950/50  md:hover:bg-pink-950 drop-shadow-[0_0_80px_red]" onClick={analyzeCode}>Check</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Current Time Complexity</h3>
            <div className="bg-gray-900 p-4 rounded-md min-h-16 flex items-center justify-center">
              {analysis.timeComplexity ? (
                <span className="text-2xl font-bold">{analysis.timeComplexity}</span>
              ) : (
                <span className="text-gray-500">-</span>
              )}
            </div>
            {analysis.expectedTime && (
              <p className="mt-3 text-sm text-gray-300">{analysis.expectedTime}</p>
            )}
          </div>

          <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-green-400">Current Space Complexity</h3>
            <div className="bg-gray-900 p-4 rounded-md min-h-16 flex items-center justify-center">
              {analysis.spaceComplexity ? (
                <span className="text-2xl font-bold">{analysis.spaceComplexity}</span>
              ) : (
                <span className="text-gray-500">-</span>
              )}
            </div>
            {analysis.expectedSpace && (
              <p className="mt-3 text-sm text-gray-300">{analysis.expectedSpace}</p>
            )}
          </div>

          <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-purple-400">Expected Complexity</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Best Time:</h4>
                <div className="bg-gray-900 p-3 rounded-md">
                  <span className="text-xl font-bold text-purple-300">O(log n)</span>
                  <p className="text-xs text-gray-400 mt-1">Logarithmic time - Achievable with divide and conquer algorithms</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-1">Best Space:</h4>
                <div className="bg-gray-900 p-3 rounded-md">
                  <span className="text-xl font-bold text-purple-300">O(1)</span>
                  <p className="text-xs text-gray-400 mt-1">Constant space - Using in-place operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default TimeComplexity;