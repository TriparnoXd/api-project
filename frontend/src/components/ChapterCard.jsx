import React from 'react'
 

export default function ChapterCard(props) {

    const { content } = props;

    const summary = content.summary.en;
    const printedString = summary.slice(0,150) + "...";
    
  return (
    <>
        <div id="card" className="h-[310px] w-[250px] flex flex-col rounded-2xl bg-purple-500 m-4 mb-20">
            <div id="heading" className='text-slate-50 font-body text-xl font-bold bg-purple-900 rounded-t-2xl p-3 truncate'>{content.transliteration}</div>
            <div className="bg-slate-300 h-full rounded-b-2xl text-zinc-950 p-4 font-bold truncate overflow-ellipsis pb-3">
                <div id="truncate-text" className="h-[200px] text-wrap truncate">
                    {printedString}
                </div>
                <div className='bg-purple-300 p-2 rounded-xl hover:p-2 duration-300 w-fit'>Read More</div>
            </div>
        </div>
    </>
  )
}
