import './WorkingArea.css'
import React, { useCallback} from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, MarkerType} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: 'node-1',
    type: 'input',
    data: { label: 'Anastasiya: Hi' },
    position: { x: 450, y: 100 },
  },
  { id: 'node-2', data: { label: 'Team: Hello!' }, position: { x: 300, y: 200 } },
  { id: 'node-3', data: { label: 'Team: Good morning!' }, position: { x: 600, y: 200 } },
  { id: 'node-4', data: { label: "Anastasiya: I want to see your sprint's results" }, position: { x: 450, y: 300 } },
];

const initialEdges = [
  { id: 'e1-2', source: 'node-1', target: 'node-2',
  markerEnd: {
    type: MarkerType.Arrow,
  }},
  { id: 'e1-3', source: 'node-1', target: 'node-3',
  markerEnd: {
    type: MarkerType.Arrow,
  }},
  { id: 'e2-4', source: 'node-2', target: 'node-4', 
  markerEnd: {
    type: MarkerType.Arrow,
  }},
  { id: 'e3-4', source: 'node-3', target: 'node-4', 
  markerEnd: {
    type: MarkerType.Arrow,
  }},
];

const WorkingArea = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  return (
    <div className="working-area">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkingArea