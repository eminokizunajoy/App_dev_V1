'use client'
import Link from 'next/link';
import Image from 'next/image'; // Imageコンポーネントをインポート
import { useRouter } from 'next/navigation'; // next/navigationからインポート

export default function Header() {

const router =useRouter();

  return (
    <header className="bg-[#fff] text-white shadow-md flex w-full">
      <div className="flex items-center w-50 h-20 mx-4">
        <Link href={"/"} className="text-2xl font-bold transition-colors">
          <Image 
            src="/images/infopia_logo.png"
            alt='Infopia'
            width={200}
            height={50}
          />
        </Link>
      </div>
      <div className='flex items-center'>
        <nav>
          <ul className="flex space-x-6">
            <div className='flex w-20 h-20 items-center justify-center m-0'>
              <button onClick={() => router.push('/')} className="hover:bg-[#ddd] flex flex-col transition-colors justify-center items-center rounded">
                <Image
                    src="/images/home.png"
                    alt="ホーム"
                    width={40} 
                    height={40}
                />
                <span className='text-gray-800'>ホーム</span>
              </button>
            </div>
            <div className='flex w-20 h-20 items-center justify-center m-0'>
              <button onClick={() => router.push('/issue_list')} className="hover:bg-[#ddd] flex flex-col transition-colors justify-center items-center rounded">
                <Image
                    src="/images/question_list.png"
                    alt="問題一覧"
                    width={40} 
                    height={40}
                />
                <span className='text-gray-800'>問題一覧</span>
              </button>
            </div>
            <div className='flex w-20 h-20 items-center justify-center m-0'>
              <button onClick={() => router.push('/')} className="hover:bg-[#ddd] flex flex-col transition-colors justify-center items-center rounded">
                <Image
                    src="/images/question_create.png"
                    alt="問題作成"
                    width={40} 
                    height={40}
                />
                <span className='text-gray-800'>問題作成</span>
              </button>
            </div>
            <div className='flex w-20 h-20 items-center justify-center m-0'>
              <button onClick={() => router.push('/')} className="hover:bg-[#ddd] flex flex-col transition-colors justify-center items-center rounded">
                <Image
                    src="/images/group.png"
                    alt="グループ"
                    width={40} 
                    height={40}
                />
                <span className='text-gray-800'>グループ</span>
              </button>
            </div>
            <div className='flex w-20 h-20 items-center justify-center m-0'>
              <button onClick={() => router.push('/')} className="hover:bg-[#ddd] flex flex-col transition-colors justify-center items-center rounded">
                <Image
                    src="/images/assignment.png"
                    alt="提出"
                    width={40} 
                    height={40}
                />
                <span className='text-gray-800'>提出</span>
              </button>
            </div>
            <div className='flex w-20 h-20 items-center justify-center m-0'>
              <button onClick={() => router.push('/')} className="hover:bg-[#ddd] flex flex-col transition-colors justify-center items-center rounded">
                <Image
                    src="/images/event.png"
                    alt="イベント"
                    width={40} 
                    height={40}
                />
                <span className='text-gray-800'>イベント</span>
              </button>
            </div>
          </ul>
        </nav>
      </div>
      <div className='flex items-center ml-auto mr-2 w-40 h-20'>
        <div className='flex flex-col items-center justify-center w-25 h-20'>
          <div className='flex w-full h-8 justify-center'>
            <Image
              src="/images/test_rank.png"
              alt="ユーザーアイコン"
              width={60}
              height={30}
            />
          </div>
          <div className='flex w-full h-8 justify-center'>
            <Image
              src="/images/test_login.png"
              alt="ユーザーアイコン"
              width={60}
              height={30}
            />
          </div>
        </div>
        <div className='flex items-center justify-end rounded-full h-15 w-15 bg-white'>
          <Link href="/" className="">
            <Image
              src="/images/test_icon.webp"
              alt="ユーザーアイコン"
              width={60}
              height={60}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}