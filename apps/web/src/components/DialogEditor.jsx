import './DialogEditor.css'
import MainPanel from './MainPanel'
import WorkingArea from './WorkingArea'
import {useState} from 'react'

export default function DialogEditor() {
    const [onAddNode, setOnAddNode] = useState(() => () => {});
    return (
        <div className="dialog-editor">
            <MainPanel onAddNode={onAddNode} />
            <WorkingArea setOnAddNode={setOnAddNode} />
        </div>
    )
}

