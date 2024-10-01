"use client"

import { useState } from 'react'

export default function App() {
  const [tweet, setTweet] = useState('')

  const handlePost = () => {
    const tweetWithTag = `${tweet} @dogatproject`; // Append the tag here
    const tweetIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetWithTag)}`;
    window.open(tweetIntentUrl, '_blank');
  }

  return (
    <div className="h-screen w-screen bg-black overflow-hidden relative">

      <div className='absolute bottom-[15%] flex justify-center w-full z-10'>
        <a href="" className='bg-white rounded flex justify-between px-3 py-2 font-semibold items-center gap-2 hover:bg-slate-200'>
          <img src="dog.png" className='size-12 rounded-full'></img>
          @dogtagsolana
        </a>
      </div>

      <div className="absolute inset-0 text-neutral-800 text-4xl whitespace-pre animate-move">
        {Array(50).fill(Array(100).fill('@').join('')).join('\n')}
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-black border border-neutral-800 p-4 rounded-xl shadow-lg max-w-md w-[95vw] md:w-full">
          <textarea
            className="w-full p-2 bg-black text-white border-none resize-none focus:outline-none focus:ring-0"
            placeholder="Type away and we will automatically add the @!"
            rows={4}
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="text-white text-sm">
              {280 - tweet.length} characters remaining
            </div>
            <button
              className="bg-white hover:bg-slate-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black px-3 py-1.5 rounded"
              onClick={handlePost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-50%, -50%);
          }
        }
        .animate-move {
          animation: move 120s linear infinite;
        }
      `}</style>
    </div>
  )
}