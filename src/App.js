import PortfolioState from "./Context/PortfolioState";
import Landing from "./Components/Landing";
import "./App.css";
import { useEffect, useState } from "react";
import Funnel from "../src/Assets/Funnel.gif"
import LoadingBar from "react-top-loading-bar";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => {setIsLoading(false)}, 2000);
    setTimeout(() => {document.getElementById("loadingBanner").classList.add("hidden")}, 2751)
  }, [])

  return (
    <>
      <PortfolioState>
      <LoadingBar height="5px" waitingTime='700' transitionTime='500' color= 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)' progress={progress} onLoaderFinished={() => setProgress(0)} />
        <div className="App bg-[#050816] bg-landingBG bg-auto laptop:bg-contain bg-no-repeat">
            <div className={`absolute h-screen grid items-center justify-center w-screen bg-white z-50 ${isLoading ? "flex flex-col" : "animate__animated animate__fadeOut"}`} id="loadingBanner">
              <div className="space-y-6">
                <img src={Funnel} alt="Funnel" />
                <p className="font-drGlitch">LOADING ...</p>
              </div>
            </div>
              <div>
                <Landing />
              </div>
            </div>
        
      </PortfolioState>
    </>
  );
}

export default App;
