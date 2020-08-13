import React from 'react';
import dylan from './assets/dylan.png';
import music from "./assets/music.mp3"
import './App.css';

function App() {
  console.log("My name is Dylan, welcome to my website." )

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://youtu.be/5vRlJrkxsqo?t=21"><img src={dylan} className="App-logo" alt="logo" useMap="#image-map" /></a>
        <map id="image-map" name="image-map">
        <area target="_blank" alt="dylan" title="dylan" coords="360,670,271,592,203,548,150,442,153,411,141,292,144,253,161,211,192,176,239,142,279,121,319,108,364,99,417,99,459,102,503,115,540,134,574,154,598,174,625,202,643,225,658,259,666,289,679,317,689,347,688,377,682,407,690,433,701,460,712,488,711,521,702,551,697,584,687,620,682,644,685,676,681,718,666,737,634,740,596,740,555,735,526,727,512,730,475,716,447,708,418,703,402,701" shape="poly" href="https://youtu.be/5vRlJrkxsqo?t=21" />
      </map>
      <iframe src={music} allow="autoplay" id="audio" style={{display: "none"}}></iframe>

      <audio autoplay>
        <source src={music} type="audio/mpeg"/>
      </audio>
      </header>
      
    </div>
  );
}

export default App;
