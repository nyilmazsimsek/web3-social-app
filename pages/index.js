import Head from "next/head";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>

      <Head>
        <title>Web3 Social App</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          
          <div className="w-2/3 p-5 mt-10"> 
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Web3 Social 
            </h2>
            <h2 className="text-3xl font-bold mb-2">
              App
            </h2>
            <div className="py-10">
              <button className="border-2 border-orange-500 text-orange--500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-500 hover:text-white">
                Wallet Connect
              </button>
            </div>

          </div>
          </div>
          
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-11"> 
          <h2 className="text-3xl font-bold mb-2"> WELCOME</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-2"> Connect your wallet and start your journey on Web3 Social App!</p>
          </div>
        
        </div>


      </main>

    </div>
  )
}
