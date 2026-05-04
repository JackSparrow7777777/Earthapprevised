import React from 'react';

interface ControlPanelProps {
  terrainEnabled: boolean;
  setTerrainEnabled: (val: boolean) => void;
  buildingsEnabled: boolean;
  setBuildingsEnabled: (val: boolean) => void;
  atmosphereEnabled: boolean;
  setAtmosphereEnabled: (val: boolean) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  terrainEnabled,
  setTerrainEnabled,
  buildingsEnabled,
  setBuildingsEnabled,
  atmosphereEnabled,
  setAtmosphereEnabled
}) => {
  return (
    <aside className="control-panel" aria-label="Earth controls" style={{ zIndex: 5 }}>
      <section className="control-section toggles" id="layer-toggles">
        <label>
          <input 
            type="checkbox" 
            checked={atmosphereEnabled} 
            onChange={(e) => setAtmosphereEnabled(e.target.checked)} 
          /> 
          <span>Atmosphere</span>
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={terrainEnabled} 
            onChange={(e) => setTerrainEnabled(e.target.checked)} 
          /> 
          <span>Elevation</span>
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={buildingsEnabled} 
            onChange={(e) => setBuildingsEnabled(e.target.checked)} 
          /> 
          <span>3D Cities</span>
        </label>
      </section>

      <section className="control-section time-section">
        <div className="section-title">
          <span>Solar Time</span>
          <label className="live-toggle"><input type="checkbox" defaultChecked /> Live</label>
        </div>
        <input type="range" min="0" max="24" defaultValue="12" step="0.1" aria-label="Manual solar time" />
        <div className="time-readout">
          <span>Live UTC</span>
          <span>Sun vector locked</span>
        </div>
      </section>
    </aside>
  );
};

export default ControlPanel;
