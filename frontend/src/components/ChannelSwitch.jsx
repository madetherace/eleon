import React from 'react';

// Компонент переключателя с ползунком
const ChannelSwitch = ({ id, label, isOn, onChange, disabled = false }) => {
  return (
    <div className="channel-switch flex justify-between items-center p-3 bg-gray-50 rounded-lg">
      <label htmlFor={id} className="text-gray-700 font-medium">
        {label}
      </label>
      
      <div className="switch-container">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            id={id}
            type="checkbox"
            className="sr-only peer"
            checked={isOn}
            onChange={onChange}
            disabled={disabled}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"></div>
        </label>
        <span className="ml-2 text-sm text-gray-600">
          {isOn ? 'ON' : 'OFF'}
        </span>
      </div>
    </div>
  );
};

export default ChannelSwitch;