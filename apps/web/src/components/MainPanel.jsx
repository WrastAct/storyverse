import './MainPanel.css'
import add from '../assets/icons/add.svg'
import search from '../assets/icons/search.svg'
import play from '../assets/icons/play.svg'
import share from '../assets/icons/share.svg'
import save from '../assets/icons/save.svg'

export default function MainPanel() {
    return (
        <div className="MainPanel">
           <div className='left-panel'>
                <img src={add} alt="Add Button" />
                <img src={search} alt="Search Button" />
           </div>
           <div className='center-panel'>
                <img src={play} alt="Play Button" />
                <div className='dialogue-title'>Dialog Title</div>
           </div>
           <div className='right-panel'>
                <img src={share} alt="Share Button" />
                <img src={save} alt="Save Button" />
           </div>
        </div>
    )
}