import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import './Node.css';

const Node = ({ data }) => {
  const [value, setValue] = useState(data.label);

  const onChange = useCallback((evt) => {
    setValue(evt.target.value);
  }, []);

  return (
    <div className="main">
      <Handle type="target" position={Position.Top} />
      <div className="wrapper">
        <textarea name="text" cols="10" rows="5" value={value} onChange={onChange}></textarea>
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default Node;