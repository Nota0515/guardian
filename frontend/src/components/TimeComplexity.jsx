import { useState } from 'react';
import { GoHome } from "react-icons/go";
import Button from '../components/Buttons'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import { Link } from 'react-router-dom';
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
        timeComplexity: 'O(N²)',
        spaceComplexity: 'O(n)',
        expectedTime: 'o(nlogn)',
        expectedSpace: 'o(1)'
      };

      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen p-6 text-white">
      <h1 className="font-mainFont text-center font-medium text-3xl mb-4">Code Complexity Analyzer</h1>

      <div className="max-w-2xl border-t border-white/20 mx-auto p-6 backdrop-blur-sm">
        <div className="mb-6">
          <div className='flex items-center mb-2 pb-2'>
            <h1 className="block text-sm font-thin font-mainFont px-1   " >
              Enter your code:
            </h1>
            <div>
              <button onClick={() => setMenu(!menu)} className='ml-2 px-3 border bg-black border-white/30 text-white rounded-md font-thin font-mainFont shadow'>
                {lang}
              </button>
              {menu && (
                <div className='absolute mt-2 w-40 bg-gray-900 border border-white/20 rounded-lg overflow-hidden shadow-lg z-10'>
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
          <div className="bg-black rounded-lg overflow-hidden border border-white/20">
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
                backgroundColor: '#000000',
              }}
              className="rounded-lg no-editor-focus"
            />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <Button className="px-10 text-sm font-mainFont h-10 rounded-md border border-pink-500/30 bg-pink-950 md:bg-pink-950/50  md:hover:bg-pink-950 drop-shadow-[0_0_80px_red]" onClick={analyzeCode}>Check</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black p-5 h-fit  rounded-lg border border-white/20">
            <h3 className="font-mainFont mb-3">Current Time Complexity</h3>
            <div className="bg-gray-950/20 border border-white/20 p-4 rounded-md flex items-center justify-center">
              {analysis.timeComplexity ? (
                <span className="text-2xl font-mainFont">{analysis.timeComplexity}</span>
              ) : (
                <span className="text-gray-500">-</span>
              )}
            </div>
          </div>

          <div className="bg-black p-5 h-fit rounded-lg border border-white/20">
            <h3 className="font-mainFont mb-3">Current Space Complexity</h3>
            <div className="bg-gray-950/20 border border-white/20 backdrop-blur-sm p-4 rounded-md flex items-center justify-center">
              {analysis.spaceComplexity ? (
                <span className="text-2xl font-mainFont">{analysis.spaceComplexity}</span>
              ) : (
                <span className="text-gray-500">-</span>
              )}
            </div>
          </div>
          <div className="bg-black p-5 rounded-lg border border-white/20">
            <h3 className="text-lg font-mainFont mb-3">Expected Complexity</h3>
            <div className="flex  items-center space-x-4">
              <div>
                <h4 className="text-sm font-mainFont text-gray-400">Time:</h4>
                <div className="bg-gray-950/20 border border-white/20 px-3 py-1 rounded-md">
                  {analysis.expectedTime ? (
                    <span className="text-xl text-nowrap font-mainFont">{analysis.expectedTime}</span>
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-mainFont text-gray-400">Space:</h4>
                <div className="bg-gray-950/20 border border-white/20 px-3 py-1 rounded-md">
                  {analysis.expectedTime ? (<span className="text-xl text-nowrap font-mainFont">{analysis.expectedSpace}</span>
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-black p-5 rounded-lg border border-white/20">
            <Link to={'/'} className='flex flex-col items-center space-y-1'>
              <div className='flex hoeimg h-20 relative border-2 border-black rounded-md overflow-hidden' >
                <img src='public/home.png' className='' />
              </div>
              <div className='flex items-center space-x-1'>
                <span>
                  <GoHome />
                </span><p className='text-sm font-mainFont font-thin pt-1'>Home</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default TimeComplexity;