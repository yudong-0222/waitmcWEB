import React from 'react';
import Link from 'next/link';
import styles from '../styles';
import dynamic from "next/dynamic";

const posts = [
  { id: 'snow', title: 'TEST' },
  // 其他文章
];
const Update = () => (
  <section className={`${styles.yPaddings} ${styles.paddings} sm:pl-16 pl-6 relative z-10 h-screen`}>
    <div className='mt-12 h-screen'>
      <h1 className='text-white font-bold text-5xl text-center'>所有文章📃</h1>
      <div className='flex flex-row justify-center items-center relative'>
        <ul className='text-gray-200 font-extrabold text-3xl mt-8 flex gap-12'>
          {posts.map((post) => (
            <li key={post.id} className='mt-8'>
              <a className='hover:bg-red-500 rounded-sm' href={`/update/${post.id}`}>
                <div className='bg-slate-100 rounded-3xl text-black text-2xl h-[380px] w-[350px] flex flex-col items-center justify-center cursor-pointer'>
                  {post.title}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);


export default dynamic (() => Promise.resolve(Update), {ssr: false})

