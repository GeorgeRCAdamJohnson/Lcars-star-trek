import React from 'react';
import {
  LcarsFrame,
  LcarsElbow,
  LcarsBar,
  LcarsSidebarSeg,
  LcarsScreen,
  LcarsPanel,
  LcarsButton,
  LcarsTextBar,
  LcarsAlert,
  LcarsDataRow,
  LcarsClock,
  useAutoMode,
  useEra,
} from './index';

const App: React.FC = () => {
  const { era, setEra } = useEra('tng');
  const { activeScreen, setScreen } = useAutoMode({
    screens: ['conn', 'ops', 'tactical', 'science', 'engineering', 'medical'],
    idleTimeout: 45000,
    interval: 6000,
  });

  const ships: Record<string, { name: string; reg: string; class: string; crew: string }> = {
    tng: { name: 'USS ENTERPRISE', reg: 'NCC-1701-D', class: 'Galaxy Class', crew: '1,014' },
    voy: { name: 'USS VOYAGER', reg: 'NCC-74656', class: 'Intrepid Class', crew: '141' },
    ds9: { name: 'USS DEFIANT', reg: 'NX-74205', class: 'Defiant Class', crew: '50' },
    hicon: { name: 'USS PROMETHEUS', reg: 'NX-59650', class: 'Prometheus Class', crew: '175' },
    midnight: { name: 'USS TITAN', reg: 'NCC-80102', class: 'Luna Class', crew: '350' },
    neon: { name: 'USS PROTOSTAR', reg: 'NX-76884', class: 'Protostar Class', crew: '20' },
    frost: { name: 'USS RELATIVITY', reg: 'NCV-474439-G', class: 'Wells Class', crew: '200' },
    ember: { name: 'USS DISCOVERY', reg: 'NCC-1031', class: 'Crossfield Class', crew: '136' },
  };
  const ship = ships[era] || ships.tng;

  return (
    <LcarsFrame era={era}>
      <LcarsElbow position="tl" color="orange" />

      <LcarsFrame.Topbar>
        <LcarsBar color="orange" flex right>93 1853 24109 7 7024 322 4149</LcarsBar>
        <LcarsBar color="gold" width={200} center>LCARS 47</LcarsBar>
        <LcarsBar color="african-violet" width={180} center>UFP</LcarsBar>
        <LcarsBar color="blue" width={100} end center>05</LcarsBar>
      </LcarsFrame.Topbar>

      <LcarsFrame.Sidebar>
        <LcarsSidebarSeg color="orange" flex active={activeScreen === 'conn'} onClick={() => setScreen('conn')}>CONN</LcarsSidebarSeg>
        <LcarsSidebarSeg color="tan" height={60} justify="center" active={activeScreen === 'ops'} onClick={() => setScreen('ops')}>OPS</LcarsSidebarSeg>
        <LcarsSidebarSeg color="gold" height={80} justify="center" active={activeScreen === 'tactical'} onClick={() => setScreen('tactical')}>TACTICAL</LcarsSidebarSeg>
        <LcarsSidebarSeg color="african-violet" height={60} justify="center" active={activeScreen === 'science'} onClick={() => setScreen('science')}>SCIENCE</LcarsSidebarSeg>
        <LcarsSidebarSeg color="lavender" height={100} justify="center" active={activeScreen === 'engineering'} onClick={() => setScreen('engineering')}>ENGINEERING</LcarsSidebarSeg>
        <LcarsSidebarSeg color="blue" flex justify="flex-start" active={activeScreen === 'medical'} onClick={() => setScreen('medical')}>MEDICAL</LcarsSidebarSeg>
      </LcarsFrame.Sidebar>

      <LcarsFrame.Content>
        {/* CONN */}
        <LcarsScreen active={activeScreen === 'conn'}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="lcars-title lcars-title--xl">LCARS Interface</h1>
            <LcarsClock />
          </div>
          <div className="lcars-ticker"><span className="dot"></span> DATA CHANNEL OPEN • {ship.reg} • SYSTEM NOMINAL</div>

          <div style={{ display: 'flex', gap: '4px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--lcars-font-ui)', fontSize: 13, color: 'var(--lcars-muted)', letterSpacing: 1, marginRight: 8 }}>VESSEL:</span>
            <LcarsButton color="orange" size="sm" onClick={() => setEra('tng')}>NCC-1701-D</LcarsButton>
            <LcarsButton color="blue" size="sm" onClick={() => setEra('voy')}>NCC-74656</LcarsButton>
            <LcarsButton color="lavender" size="sm" onClick={() => setEra('ds9')}>NX-74205</LcarsButton>
            <span style={{ fontFamily: 'var(--lcars-font-ui)', fontSize: 13, color: 'var(--lcars-muted)', letterSpacing: 1, margin: '0 8px' }}>THEME:</span>
            <LcarsButton color="red" size="sm" onClick={() => setEra('hicon')}>HI-CON</LcarsButton>
            <LcarsButton color="blue" size="sm" onClick={() => setEra('midnight')}>MIDNIGHT</LcarsButton>
            <LcarsButton color="african-violet" size="sm" onClick={() => setEra('neon')}>NEON</LcarsButton>
            <LcarsButton color="gold" size="sm" onClick={() => setEra('frost')}>FROST</LcarsButton>
            <LcarsButton color="salmon" size="sm" onClick={() => setEra('ember')}>EMBER</LcarsButton>
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            <LcarsPanel title="Sensor Array" value="47.293" status="NOMINAL" statusType="ok" />
            <LcarsPanel title="Warp Core" value="1,247.8" status="STABLE" statusType="ok" />
            <LcarsPanel title="Shields" value="98.7%" status="OPTIMAL" statusType="ok" />
          </div>

          <div style={{ flex: 1, minHeight: 200, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--lcars-border)' }}>
            <div style={{ position: 'absolute', top: 12, left: 16, fontFamily: 'var(--lcars-font-ui)', fontSize: 12, color: 'var(--lcars-salmon)', letterSpacing: 1, zIndex: 1 }}>MAIN VIEWER</div>
            <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&h=400&fit=crop" alt="Nebula" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
          </div>

          <LcarsTextBar color="gold">{ship.name} {ship.reg} • {ship.class} • CREW: {ship.crew}</LcarsTextBar>

          <div style={{ display: 'flex', gap: 12 }}>
            <LcarsButton color="red" blink="blink-fast">Red Alert</LcarsButton>
            <LcarsButton color="gold">Yellow Alert</LcarsButton>
            <LcarsButton color="orange">Engage</LcarsButton>
            <LcarsButton color="blue">Hail</LcarsButton>
            <LcarsButton color="lavender">Scan</LcarsButton>
          </div>
        </LcarsScreen>

        {/* OPS */}
        <LcarsScreen active={activeScreen === 'ops'}>
          <h1 className="lcars-title lcars-title--xl">Operations</h1>
          <p className="lcars-subtitle">Ship Systems Status • All Decks Reporting</p>
          <LcarsPanel title="System Status" style={{ flex: 1 }}>
            <LcarsDataRow label="Life Support" value="NOMINAL" valueColor="green" />
            <LcarsDataRow label="Structural Integrity" value="99.8%" valueColor="green" />
            <LcarsDataRow label="Inertial Dampeners" value="ACTIVE" valueColor="green" />
            <LcarsDataRow label="Deflector Array" value="STANDBY" valueColor="gold" />
            <LcarsDataRow label="Transporters" value="6 ONLINE" valueColor="green" />
            <LcarsDataRow label="Replicators" value="NOMINAL" valueColor="green" />
            <LcarsDataRow label="Communications" value="ALL BANDS" valueColor="green" />
          </LcarsPanel>
          <LcarsAlert variant="blue">All stations report ready.</LcarsAlert>
        </LcarsScreen>

        {/* TACTICAL */}
        <LcarsScreen active={activeScreen === 'tactical'}>
          <h1 className="lcars-title lcars-title--xl">Tactical</h1>
          <p className="lcars-subtitle">Weapons & Defense Systems</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <LcarsPanel title="Phaser Banks" value="12/12" status="CHARGED" statusType="ok" />
            <LcarsPanel title="Torpedo Bay" value="275" status="LOADED" statusType="ok" />
            <LcarsPanel title="Shield Grid" value="100%" status="ALL SECTORS" statusType="ok" />
          </div>
          <LcarsPanel title="Threat Assessment" style={{ flex: 1 }}>
            <LcarsDataRow label="Long Range Scan" value="CLEAR" valueColor="green" />
            <LcarsDataRow label="Short Range Scan" value="CLEAR" valueColor="green" />
            <LcarsDataRow label="Alert Status" value="CONDITION GREEN" valueColor="green" />
          </LcarsPanel>
          <div style={{ display: 'flex', gap: 12 }}>
            <LcarsButton color="red">Red Alert</LcarsButton>
            <LcarsButton color="gold">Shields Up</LcarsButton>
            <LcarsButton color="orange">Lock Weapons</LcarsButton>
          </div>
        </LcarsScreen>

        {/* SCIENCE */}
        <LcarsScreen active={activeScreen === 'science'}>
          <h1 className="lcars-title lcars-title--xl">Science</h1>
          <p className="lcars-subtitle">Sensor Analysis & Research</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <LcarsPanel title="Stellar Cartography" value="SEC 001" status="MAPPED" statusType="ok" />
            <LcarsPanel title="Anomalies" value="0" status="NONE DETECTED" statusType="ok" />
          </div>
          <div style={{ flex: 1, minHeight: 180, borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid var(--lcars-border)' }}>
            <div style={{ position: 'absolute', top: 12, left: 16, fontFamily: 'var(--lcars-font-ui)', fontSize: 12, color: 'var(--lcars-salmon)', letterSpacing: 1, zIndex: 1 }}>STELLAR CARTOGRAPHY</div>
            <img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=900&h=300&fit=crop" alt="Stars" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <LcarsButton color="blue">Full Scan</LcarsButton>
            <LcarsButton color="lavender">Probe Launch</LcarsButton>
          </div>
        </LcarsScreen>

        {/* ENGINEERING */}
        <LcarsScreen active={activeScreen === 'engineering'}>
          <h1 className="lcars-title lcars-title--xl">Engineering</h1>
          <p className="lcars-subtitle">Propulsion & Power Systems</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <LcarsPanel title="Warp Core" value="1,247.8" status="ONLINE" statusType="ok" />
            <LcarsPanel title="Impulse" value="FULL" status="READY" statusType="ok" />
            <LcarsPanel title="Dilithium" value="94.2%" status="ALIGNED" statusType="ok" />
          </div>
          <LcarsPanel title="Power Distribution" style={{ flex: 1 }}>
            <LcarsDataRow label="EPS Grid" value="NOMINAL" valueColor="green" />
            <LcarsDataRow label="Antimatter Containment" value="STABLE" valueColor="green" />
            <LcarsDataRow label="Warp Field Geometry" value="SYMMETRIC" valueColor="green" />
            <LcarsDataRow label="Coolant System" value="CIRCULATING" valueColor="green" />
            <LcarsDataRow label="Fusion Reactors" value="4/4 ONLINE" valueColor="green" />
          </LcarsPanel>
          <LcarsTextBar color="orange">WARP CAPABILITY: MAX WARP 9.6 — CRUISE WARP 6</LcarsTextBar>
        </LcarsScreen>

        {/* MEDICAL */}
        <LcarsScreen active={activeScreen === 'medical'}>
          <h1 className="lcars-title lcars-title--xl">Medical</h1>
          <p className="lcars-subtitle">Sickbay & Crew Health</p>
          <div style={{ display: 'flex', gap: 16 }}>
            <LcarsPanel title="Crew Health" value="1,012" status="FIT FOR DUTY" statusType="ok" />
            <LcarsPanel title="Sickbay" value="2" status="PATIENTS" statusType="warn" />
            <LcarsPanel title="Biobeds" value="22/24" status="AVAILABLE" statusType="ok" />
          </div>
          <LcarsPanel title="Medical Log" style={{ flex: 1 }}>
            <LcarsDataRow label="14:45" value="Routine physicals — Deck 7 complete" valueColor="muted" />
            <LcarsDataRow label="13:20" value="Lt. Barclay — transporter phobia follow-up" valueColor="muted" />
            <LcarsDataRow label="11:05" value="Medical supplies restocked from Starbase 74" valueColor="muted" />
            <LcarsDataRow label="09:30" value="Quarterly vaccination schedule — Decks 4-8" valueColor="muted" />
          </LcarsPanel>
          <LcarsAlert variant="blue">No active medical emergencies.</LcarsAlert>
          <LcarsTextBar color="salmon">CMO: DR. CRUSHER • STAFF: 12 ACTIVE • QUARANTINE: CLEAR</LcarsTextBar>
        </LcarsScreen>
      </LcarsFrame.Content>

      <LcarsElbow position="bl" color="blue" />

      <LcarsFrame.Bottombar>
        <LcarsBar color="blue" flex>STARFLEET COMMAND</LcarsBar>
        <LcarsBar color="lavender" width={200} center>22-4786</LcarsBar>
        <LcarsBar color="african-violet" width={160} center>SEC 31</LcarsBar>
        <LcarsBar color="salmon" width={100} end center>09</LcarsBar>
      </LcarsFrame.Bottombar>
    </LcarsFrame>
  );
};

export default App;
