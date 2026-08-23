import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, RotateCcw, Cpu, Zap, Sliders, Layers, Sparkles } from 'lucide-react';

export const LithoResinCanvas = () => {
  const canvasRef = useRef(null);
  const [laserPower, setLaserPower] = useState(65); // mW
  const [scanSpeed, setScanSpeed] = useState(150); // mm/s
  const [viscosity, setViscosity] = useState(1200); // mPa.s
  const [sliceThickness, setSliceThickness] = useState(0.8); // um
  const [preset, setPreset] = useState('Micro-Lens Array');
  const [isSimulating, setIsSimulating] = useState(true);

  // Animation frame ref
  const animFrameId = useRef(null);
  const stepRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationRunning = true;

    const render = () => {
      if (!animationRunning) return;
      stepRef.current += 1;
      const t = stepRef.current;

      const width = canvas.width;
      const height = canvas.height;

      // 1. Clean Background & Nano Grid
      ctx.fillStyle = '#070b14';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid Lines
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Liquid Photoresin Vat & Glass Substrate
      const vatY = height * 0.45;
      // Substrate Glass Top
      ctx.fillStyle = 'rgba(79, 172, 254, 0.15)';
      ctx.fillRect(50, vatY - 20, width - 100, 20);
      ctx.strokeStyle = 'rgba(79, 172, 254, 0.4)';
      ctx.lineWidth = 2;
      ctx.strokeRect(50, vatY - 20, width - 100, 20);

      ctx.fillStyle = '#ffffff';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText('Glass Substrate (Fused Silica)', 60, vatY - 6);

      // Liquid Resin Vat Area
      const resinGrad = ctx.createLinearGradient(0, vatY, 0, height - 30);
      resinGrad.addColorStop(0, 'rgba(0, 242, 254, 0.12)');
      resinGrad.addColorStop(1, 'rgba(121, 40, 202, 0.18)');
      ctx.fillStyle = resinGrad;
      ctx.fillRect(50, vatY, width - 100, height - vatY - 30);
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.3)';
      ctx.strokeRect(50, vatY, width - 100, height - vatY - 30);

      ctx.fillStyle = '#00f2fe';
      ctx.fillText('Liquid IP-Photoresin Matrix', 60, vatY + 20);

      // 3. Galvo Laser Head & Objective Lens
      const objCenterX = width / 2 + Math.sin(t * (scanSpeed / 3000)) * 140;
      const objY = 30;

      // Laser Objective Graphic
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#00f2fe';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(objCenterX - 30, objY);
      ctx.lineTo(objCenterX + 30, objY);
      ctx.lineTo(objCenterX + 20, objY + 40);
      ctx.lineTo(objCenterX - 20, objY + 40);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#00f2fe';
      ctx.font = '10px JetBrains Mono';
      ctx.fillText('63x / 1.4 NA', objCenterX - 28, objY + 24);

      // 4. Femtosecond 780nm Laser Beam Cone (Two-Photon Focused)
      const voxelZ = vatY + 40 + Math.abs(Math.sin(t * 0.02)) * (height - vatY - 120);

      ctx.save();
      const beamGrad = ctx.createLinearGradient(objCenterX, objY + 40, objCenterX, voxelZ);
      beamGrad.addColorStop(0, 'rgba(121, 40, 202, 0.4)');
      beamGrad.addColorStop(0.7, 'rgba(0, 242, 254, 0.6)');
      beamGrad.addColorStop(1, 'rgba(255, 255, 255, 0.9)');

      ctx.beginPath();
      ctx.moveTo(objCenterX - 18, objY + 40);
      ctx.lineTo(objCenterX + 18, objY + 40);
      ctx.lineTo(objCenterX + 2, voxelZ);
      ctx.lineTo(objCenterX - 2, voxelZ);
      ctx.closePath();
      ctx.fillStyle = beamGrad;
      ctx.fill();

      // High-Intensity Two-Photon Focal Voxel (I² absorption spot)
      const voxelRadius = (laserPower / 100) * 8 + 4;
      const voxelGrad = ctx.createRadialGradient(objCenterX, voxelZ, 0, objCenterX, voxelZ, voxelRadius);
      voxelGrad.addColorStop(0, '#ffffff');
      voxelGrad.addColorStop(0.4, '#00f2fe');
      voxelGrad.addColorStop(1, 'rgba(121, 40, 202, 0)');

      ctx.beginPath();
      ctx.arc(objCenterX, voxelZ, voxelRadius, 0, Math.PI * 2);
      ctx.fillStyle = voxelGrad;
      ctx.fill();
      ctx.restore();

      // 5. Polymerized Microstructures (Simulated 3D Printed Layers)
      ctx.fillStyle = 'rgba(0, 242, 254, 0.8)';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;

      if (preset === 'Micro-Lens Array') {
        for (let i = -3; i <= 3; i++) {
          const lx = width / 2 + i * 45;
          const ly = vatY + 30;
          ctx.beginPath();
          ctx.arc(lx, ly, 18, Math.PI, 0);
          ctx.fill();
          ctx.stroke();
        }
      } else if (preset === 'Photonic Crystal') {
        for (let r = 0; r < 4; r++) {
          for (let c = -4; c <= 4; c++) {
            const px = width / 2 + c * 25;
            const py = vatY + 30 + r * 20;
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else if (preset === 'Bio-Scaffold') {
        for (let layer = 0; layer < 5; layer++) {
          const ly = vatY + 25 + layer * 15;
          ctx.beginPath();
          ctx.moveTo(width / 2 - 120, ly);
          ctx.lineTo(width / 2 + 120, ly);
          ctx.stroke();
        }
      } else { // Microfluidic Nozzle
        ctx.beginPath();
        ctx.moveTo(width / 2 - 80, vatY + 20);
        ctx.lineTo(width / 2 - 20, vatY + 90);
        ctx.lineTo(width / 2 + 20, vatY + 90);
        ctx.lineTo(width / 2 + 80, vatY + 20);
        ctx.closePath();
        ctx.stroke();
      }

      // Telemetry Text Overlay
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px JetBrains Mono, monospace';
      ctx.fillText(`Voxel Intensity (I²): ${(laserPower * 1.42).toFixed(1)} GW/cm²`, 20, height - 15);
      ctx.fillText(`Scan Speed: ${scanSpeed} mm/s`, width - 180, height - 15);

      if (isSimulating) {
        animFrameId.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      animationRunning = false;
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [laserPower, scanSpeed, viscosity, sliceThickness, preset, isSimulating]);

  return (
    <div className="glass-panel" style={{ borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--border-cyan)' }}>
      {/* Simulation Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={20} color="#00f2fe" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
              2PP Two-Photon Polymerization Physics Engine
            </h3>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            Sub-micron galvo laser voxel scanning & photoresin reaction kinetics canvas
          </p>
        </div>

        {/* Presets */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {['Micro-Lens Array', 'Photonic Crystal', 'Bio-Scaffold', 'Microfluidic Nozzle'].map(p => (
            <button
              key={p}
              onClick={() => setPreset(p)}
              style={{
                background: preset === p ? '#00f2fe' : 'rgba(255,255,255,0.05)',
                color: preset === p ? '#050811' : '#94a3b8',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                padding: '0.3rem 0.7rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* HTML5 Canvas */}
      <div style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,242,254,0.3)' }}>
        <canvas
          ref={canvasRef}
          width={800}
          height={380}
          style={{ width: '100%', height: 'auto', display: 'block', background: '#070b14' }}
        />
      </div>

      {/* Telemetry Sliders Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1.2rem',
        marginTop: '1.5rem',
        background: 'rgba(5, 8, 17, 0.6)',
        borderRadius: '10px',
        padding: '1.2rem',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#e2e8f0', marginBottom: '0.3rem' }}>
            <span>Laser Power (780nm)</span>
            <strong style={{ color: '#00f2fe' }}>{laserPower} mW</strong>
          </div>
          <input
            type="range"
            min="10"
            max="150"
            value={laserPower}
            onChange={e => setLaserPower(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#00f2fe' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#e2e8f0', marginBottom: '0.3rem' }}>
            <span>Galvo Scan Speed</span>
            <strong style={{ color: '#00f2fe' }}>{scanSpeed} mm/s</strong>
          </div>
          <input
            type="range"
            min="10"
            max="500"
            value={scanSpeed}
            onChange={e => setScanSpeed(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#00f2fe' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#e2e8f0', marginBottom: '0.3rem' }}>
            <span>Resin Viscosity</span>
            <strong style={{ color: '#00f2fe' }}>{viscosity} mPa·s</strong>
          </div>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={viscosity}
            onChange={e => setViscosity(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#00f2fe' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#e2e8f0', marginBottom: '0.3rem' }}>
            <span>Layer Z-Slice</span>
            <strong style={{ color: '#00f2fe' }}>{sliceThickness} µm</strong>
          </div>
          <input
            type="range"
            min="0.2"
            max="2.0"
            step="0.1"
            value={sliceThickness}
            onChange={e => setSliceThickness(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#00f2fe' }}
          />
        </div>
      </div>
    </div>
  );
};
