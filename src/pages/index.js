import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";


export default function Home() {
  const [newAgeMessage, setNewAgeMessage] = useState(["Hari Ini", "Hari Yang Ku", "Tunggu-Tunggu!"]);
  const [particlesInit, setParticlesInit] = useState(null);
  const [showFireworks, setShowFireworks] = useState(false);
                                                                          //! JANOCK GEBUG TERUSSS
  const particlesOptions = {
    preset: "fireworks",
    particles: {
      number: {
        value: 1
      },
      size: {
        value: 1 
      },
      life: {
        duration: 0.5
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true
      }
    },
    detectRetina: true,
    fpsLimit: 60,
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    },
    emitters: {
      direction: "top",
      position: {
        x: 50,
        y: 100
      },
      size: {
        width: 100,
        height: 0
      },
      rate: {
        delay: 0.2,
        quantity: 1
      }
    },
    emittersOptions: {
      shape: {
        type: "circle"
      },
      life: {
        duration: 0.1,
        delay: 1
      }
    }
  };
  

  useEffect(() => {
    const initParticles = async (engine) => {
      await loadFireworksPreset(engine);
    };
    setParticlesInit(() => initParticles);
  }, []);

  useEffect(() => {
    if (newAgeMessage[1] === "HAPPY 14TH BIRTHDAY!") {
      setShowFireworks(true);
    }
  }, [newAgeMessage]);

  function setSpeedType() {
    if (newAgeMessage[1] === "HAPPY 14TH BIRTHDAY!") {
      return 10;
    }else{
      return 200;
    }
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter 
            words={newAgeMessage} 
            loop={false}
            cursorStyle={"_"}
            cursor
            typeSpeed={setSpeedType()}
            onLoopDone={() => setShowFireworks(true)}
            deleteSpeed={10}
          />
        </span>
        <div className="z-50 text-white">
          <Countdown 
            date={Date.now() + 15000}
            onComplete={() => {
              setNewAgeMessage(["7 Juni 2024!", "HAPPY 14TH BIRTHDAY!"]);
            }} 
          />
        </div>
        {showFireworks && particlesInit && (
          <Particles 
            init={particlesInit}
            options={particlesOptions}
          />
        )}
      </div>
    </main>
  );
}
