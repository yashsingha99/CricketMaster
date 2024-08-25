import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <div className="flex items-center gap-8 lg:flex-row flex-col p-0 sm:px-10 lg:px-0">
  <div className="relative w-full lg:max-w-maxScreen">
    <div className="w-full flex items-center justify-center" style={{ perspective: "1000px" }}>
      <div
        className="flex items-center justify-center relative border-2 border-transparent transition-all duration-200 ease-linear overflow-hidden shadow-inner inter-var w-full rounded-3xl"
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          zIndex: 0,
          transform: "rotateY(0deg) rotateX(0deg)",
        }}
      >
        <div className="[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] relative w-full">
          <div className="w-full flex flex-col gap-x-8 justify-center items-center flex-shrink-0">
            <div className="w-full flex flex-col items-start gap-14 flex-1 pt-8 px-8">
              <div className="flex flex-col gap-y-3 self-stretch items-start">
                <div className="flex flex-col items-start self-stretch gap-y-2">
                  <p className="font-semibold text-lg" style={{ color: "rgb(123, 143, 217)" }}>
                    Fruitbox Flex
                  </p>
                  <p className="text-white font-semibold text-3xl">
                    Explore Innovative Projects with FruitboxFlex
                  </p>
                </div>
                <p className="text-base text-shark-300 font-medium">
                  From interactive web applications to cutting-edge software solutions, FruitboxFlex is the space where ideas flourish and collaborations thrive.
                </p>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                <p className="flex items-center justify-center gap-x-2 text-base font-medium px-2">
                  Try it Yourself
                </p>
              </button>
            </div>
            <div className="pt-12 self-end">
              <img
                alt="FruitboxFlex"
                loading="lazy"
                width="500"
                height="500"
                decoding="async"
                data-nimg="1"
                className="rounded-xl object-cover"
                srcSet="/_next/image?url=%2Fassets%2FHome%2Ffruitboxflex.svg&amp;w=640&amp;q=100 1x, /_next/image?url=%2Fassets%2FHome%2Ffruitboxflex.svg&amp;w=1080&amp;q=100 2x"
                src="/_next/image?url=%2Fassets%2FHome%2Ffruitboxflex.svg&amp;w=1080&amp;q=100"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="relative w-full lg:max-w-maxScreen">
    <div className="w-full flex items-center justify-center" style={{ perspective: "1000px" }}>
      <div
        className="flex items-center justify-center relative border-2 border-transparent transition-all duration-200 ease-linear overflow-hidden shadow-inner inter-var w-full rounded-3xl"
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          zIndex: 0,
          transform: "rotateY(0deg) rotateX(0deg)",
        }}
      >
        <div className="[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] relative w-full">
          <div className="w-full flex flex-col gap-x-8 justify-center items-center flex-shrink-0">
            <div className="w-full flex flex-col items-start gap-14 flex-1 pt-8 px-8">
              <div className="flex flex-col gap-y-3 self-stretch items-start">
                <div className="flex flex-col items-start self-stretch gap-y-2">
                  <p className="font-semibold text-lg" style={{ color: "rgb(16, 159, 231)" }}>
                    Quick Compiler
                  </p>
                  <p className="text-white font-semibold text-3xl">
                    Hands-on practice
                  </p>
                </div>
                <p className="text-base text-shark-300 font-medium">
                  At codehelp, you get to learn by doing. Escape tutorial hell by solving real-world challenges in our interactive labs, all within your browser.
                </p>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                <p className="flex items-center justify-center gap-x-2 text-base font-medium px-2">
                  Try it Yourself
                </p>
              </button>
            </div>
            <div className="pt-12 self-end">
              <img
                alt="Quick Compiler"
                loading="lazy"
                width="500"
                height="500"
                decoding="async"
                data-nimg="1"
                className="rounded-xl object-cover"
                src="https://www.codehelp.in/_next/image?url=%2Fassets%2FHome%2FquickCompiler.svg&w=640&q=100"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </>
  )
}

export default App
