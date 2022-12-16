import './DialogEditor.css'
import MainPanel from './MainPanel'
import WorkingArea from './WorkingArea'
import {useState} from 'react'

export default function DialogEditor() {
    const [onAddNode, setOnAddNode] = useState(() => () => {});
    const [onSave, setOnSave] = useState(() => () => {});
    const [onLoad, setOnLoad] = useState(() => () => {});
    return (
        <div className="dialog-editor">
            <MainPanel 
            onAddNode={onAddNode} 
            onSave={onSave}
            onLoad={onLoad}
            />
            <WorkingArea 
            setOnAddNode={setOnAddNode} 
            setOnSave={setOnSave}
            setOnLoad={setOnLoad}
            />
        </div>
    )
}

