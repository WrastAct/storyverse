import MainPanel from './MainPanel'
import WorkingArea from './WorkingArea'

export default function DialogEditor() {
    return (
        <div>
            <MainPanel />
            <div style={{ height: 800 }}>
                <WorkingArea />
            </div>
        </div>
    )
}

