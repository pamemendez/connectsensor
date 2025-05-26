import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import MainHeader from '../../componets/mainHeader/mainHeader';
import Settings from '../../componets/settings/settings';

const sensors = [
  { name: 'Sensor 1', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
  { name: 'Sensor 2', state: 'Inactive Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
  { name: 'Sensor 3', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
  { name: 'Sensor 4', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
  { name: 'Sensor 5', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
  { name: 'Sensor 6', state: 'Active Alert', temperature: '2°C', margin: '±2°C', mode: 'Refrigerated Storage' },
];

const getStateStyle = (state) => ({
  padding: '4px 10px',
  borderRadius: '6px',
  fontWeight: 500,
  fontSize: '13px',
  color: state === 'Active Alert' ? '#155724' : '#721c24',
  backgroundColor: state === 'Active Alert' ? '#c7f2d0' : '#f5bcbc',
  display: 'inline-block',
});

const SensorTable = () => {
  return (
    <>
      <MainHeader />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 64px)', 
          backgroundColor: '#f5f6f8',
        }}
      >
        <div style={{ padding: '24px', flex: '1 0 auto' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>Sensores Library</h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Search Input */}
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    padding: '10px 40px 10px 14px',
                    borderRadius: '20px',
                    border: '1px solid #ccc',
                    outline: 'none',
                    width: '240px',
                    fontSize: '15px',
                  }}
                />
                <FaSearch
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                    fontSize: '15px',
                  }}
                />
              </div>
              {/* Add Sensor Icon-only Button */}
              <button className="w-12 h-12 bg-[#3F9CFA] hover:bg-[#0C6CD3] rounded-full flex items-center justify-center">
                <FaPlus className="text-white text-xl" />
              </button>
            </div>
          </div>

          {/* Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#3498db', color: '#fff', textAlign: 'left' }}>
                <th style={{ padding: '12px', borderTopLeftRadius: '8px' }}>Name</th>
                <th style={{ padding: '12px' }}>State</th>
                <th style={{ padding: '12px' }}>Temperature</th>
                <th style={{ padding: '12px' }}>Margin</th>
                <th style={{ padding: '12px', borderTopRightRadius: '8px' }}>Mode</th>
              </tr>
            </thead>
            <tbody>
              {sensors.map((sensor, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: '#fff',
                    borderBottom: '1px solid #f0f0f0',
                  }}
                >
                  <td style={{ padding: '14px' }}>{sensor.name}</td>
                  <td style={{ padding: '14px' }}>
                    <span style={getStateStyle(sensor.state)}>{sensor.state}</span>
                  </td>
                  <td style={{ padding: '14px' }}>{sensor.temperature}</td>
                  <td style={{ padding: '14px' }}>{sensor.margin}</td>
                  <td style={{ padding: '14px' }}>{sensor.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ flexShrink: 0 }}>
          <Settings />
        </div>
      </div>
    </>
  );
};

export default SensorTable;
