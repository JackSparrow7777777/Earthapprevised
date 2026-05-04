import React, { useState } from 'react';

export interface Location {
  name: string;
  lat: number;
  lng: number;
  height: number;
  heading: number;
  pitch: number;
}

const locations: Location[] = [
  { name: 'New York', lat: 40.7128, lng: -74.0060, height: 1500, heading: 0, pitch: -35 },
  { name: 'Paris', lat: 48.8566, lng: 2.3522, height: 1200, heading: 25, pitch: -40 },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, height: 1800, heading: 45, pitch: -30 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093, height: 2000, heading: -20, pitch: -45 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, height: 1600, heading: 10, pitch: -35 },
  { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729, height: 2500, heading: 60, pitch: -30 },
];

interface LocationShortcutsProps {
  onSelectLocation: (loc: Location) => void;
}

const LocationShortcuts: React.FC<LocationShortcutsProps> = ({ onSelectLocation }) => {
  const [activeLoc, setActiveLoc] = useState<string | null>(null);

  return (
    <nav className="destination-rail" aria-label="Destination shortcuts" style={{ zIndex: 5 }}>
      <div className="rail-header">
        <span className="eyebrow">Destinations</span>
        <span id="range-readout">Low orbit</span>
      </div>
      <div id="city-buttons" className="city-buttons">
        {locations.map(loc => (
          <button 
            key={loc.name}
            className={activeLoc === loc.name ? 'active' : ''}
            onClick={() => {
              setActiveLoc(loc.name);
              onSelectLocation(loc);
            }}
          >
            {loc.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default LocationShortcuts;
