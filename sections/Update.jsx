import React from 'react';
import Link from 'next/link';


const posts = [
  { id: 'snow', title: 'Snow Article' },
  { id: 'a', title: '好喔' },
  // 其他文章
];

const Update = () => {
  return (
    <div>
      <div className='mt-12 h-screen'>
        <h1 className='text-white font-bold text-5xl text-center'>所有文章📃</h1>
        <div className='flex flex-row justify-center items-center relative'>
          {/* <h1 className='text-7xl text-white font-extrabold mt-12'>此頁面仍在建置當中</h1>
          <h2 className='text-5xl text-white font-extrabold mt-10'>WAIT NETWORK.</h2> */}
          {/* 卡片 */}
          <ul className='text-gray-200 font-extrabold text-3xl mt-8 flex gap-12'>
            {posts.map((post) => (
              <li key={post.id} className='mt-8'>
                <a className='hover:bg-red-500 rounded-sm'>
                  <div className='bg-slate-100 text-black text-2xl h-[380px] w-[350px] flex flex-col items-center justify-center cursor-pointer'>
                    <Link href={`/update/${post.id}`} legacyBehavior>
                      {post.title}
                    </Link>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



export default Update