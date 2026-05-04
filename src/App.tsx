import React, { useState, useEffect } from 'react';
import EarthViewer from './components/EarthViewer';
import Topbar from './components/UI/Topbar';
import LoadingScreen from './components/UI/LoadingScreen';
import ControlPanel from './components/Sidebar/ControlPanel';
import LocationShortcuts, { Location } from './components/Sidebar/LocationShortcuts';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [terrainEnabled, setTerrainEnabled] = useState(true);
  const [buildingsEnabled, setBuildingsEnabled] = useState(false);
  const [atmosphereEnabled, setAtmosphereEnabled] = useState(true);
  
  const [targetLocation, setTargetLocation] = useState<Location | null>(null);

  useEffect(() => {
    // Simulate loading for the cinematic effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectLocation = (loc: Location) => {
    setTargetLocation(loc);
    if (!buildingsEnabled) {
      setBuildingsEnabled(true);
    }
  };

  return (
    <main id="app" aria-label="Astra Terra interactive 3D Earth">
      {/* Background gradients from the Vibe project */}
      <div className="space-gradient" aria-hidden="true"></div>
      <div className="scanline" aria-hidden="true"></div>

      <LoadingScreen isVisible={loading} />

      <Topbar />

      <LocationShortcuts onSelectLocation={handleSelectLocation} />

      <ControlPanel 
        terrainEnabled={terrainEnabled}
        setTerrainEnabled={setTerrainEnabled}
        buildingsEnabled={buildingsEnabled}
        setBuildingsEnabled={setBuildingsEnabled}
        atmosphereEnabled={atmosphereEnabled}
        setAtmosphereEnabled={setAtmosphereEnabled}
      />

      <div id="globe-canvas-container" style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <EarthViewer 
          terrainEnabled={terrainEnabled}
          buildingsEnabled={buildingsEnabled}
          atmosphereEnabled={atmosphereEnabled}
          targetLocation={targetLocation}
        />
      </div>

    </main>
  );
}

export default App;
