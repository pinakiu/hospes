import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, { useState } from 'react';

const ToggleButton = () => {
  const [selected, setSelected] = useState('Guest');

  const handleSelect = (e, option) => {
    e.preventDefault()
    setSelected(option);
  };

  return (
    <div className="d-inline-block" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #ccc' }}>
      <div className="position-relative" style={{ width: '200px', height: '40px' }}>
        <div
          className="position-absolute"
          style={{
            left: selected === 'Guest' ? '1px' : '99px',
            top: '1px',
            right: '5px',
            width: '100px',
            height: '38px',
            backgroundColor: '#ddd',
            transition: 'left 0.3s ease-in-out',
            borderRadius: '20px',
            textAlign: 'center',
            lineHeight: '40px'
          }}
        >
          &nbsp;
        </div>
        <button
          onClick={(e) => handleSelect(e, 'Guest')}
          className="position-absolute btn btn-link"
          style={{
            left: '0',
            top: 0,
            width: '100px',
            height: '40px',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          Guest
        </button>
        <button
          onClick={(e) => handleSelect(e,'Host')}
          className="position-absolute btn btn-link"
          style={{
            left: '100px',
            top: 0,
            width: '100px',
            height: '40px',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          Host
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
