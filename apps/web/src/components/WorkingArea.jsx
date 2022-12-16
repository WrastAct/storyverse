import React, { useCallback, useRef, useEffect } from 'react';
import { useState } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  useViewport,
  ReactFlowProvider,
  MiniMap,
  Controls,
  ControlButton,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import Node from './Node';
import {MdDelete} from 'react-icons/md';


const initialNodes = [
  {
    id: 'node-1',
    type: 'input',
    data: { label: 'Anastasiya: Hi' },
    position: { x: 450, y: 100 },
  },
  { id: 'node-2', type: 'input', data: { label: 'Team: Hello!' }, position: { x: 300, y: 200 } },
  { id: 'node-3', type: 'input', data: { label: 'Team: Good morning!' }, position: { x: 600, y: 200 } },
  { id: 'node-4', type: 'input', data: { label: "Anastasiya: I want to see your sprint's results" }, position: { x: 450, y: 300 } },
];

const nodeTypes = { input: Node };

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

let id = initialNodes.length + 1;
const getId = () => `node_${id++}`;

const fitViewOptions = {
  padding: 3,
};

const WorkingArea = ({setOnAddNode, setOnSave, setOnLoad, dialogTitle, setDialogTitle}) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [clicked, setClicked] = useState();
  const { project } = useReactFlow();
  // const { x, y } = useViewport();
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  useEffect(() => {
    setOnAddNode(() => () => {
    });
  }, []);

  const download_file = (content, fileName, contentType) =>{
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  useEffect(() => {
    setOnSave(() => () => {
      const dialog = {
        FormatRevision: 1.0,
        DialogTitle: dialogTitle,
        Nodes: nodes,
        Edges: edges
      }
      download_file(JSON.stringify(dialog), dialog.DialogTitle + '.stvs', 'application/json');
    });
  }, [nodes, edges, dialogTitle]);

  useEffect(() => {
    setOnLoad(() => () => {
      var input = document.createElement('input');
      input.type = 'file';
      input.onchange = e => { 
        var file = e.target.files[0]; 
        var reader = new FileReader();
        reader.readAsText(file,'UTF-8');

        reader.onload = readerEvent => {
          var content = readerEvent.target.result; 
          const dialog = JSON.parse(content);
          setNodes(dialog.Nodes);
          setEdges(dialog.Edges);
          setDialogTitle(dialog.DialogTitle);
        }
      }
      input.click();
    });
  }, [setNodes, setEdges, setDialogTitle]);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        const newNode = {
          id,
          type: 'input',
          position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
          data: { label: `Node ${id}` },
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
      }
    },
    [project]
  );

  const onNodeClick = (event, node) => setClicked(node);
  const onNodeDelete = () => {
    if (!clicked || !clicked.id) {
      return;
    }
    setNodes((nds) => nds.filter((node) => node.id !== clicked.id))
  };

  return (
    <div className="working-area" ref={reactFlowWrapper} style={{height: '100%'}}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={fitViewOptions}
      />
      <MiniMap />
      <Controls>
        <ControlButton onClick={() => onNodeDelete()}>
          <MdDelete/>
        </ControlButton>
      </Controls>
    </div>
  );
};

export default (props) => (
  <ReactFlowProvider>
    <WorkingArea {...props}/>
  </ReactFlowProvider>
);
