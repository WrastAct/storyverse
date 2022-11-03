import './MainPanel.css'
import add from '../assets/icons/add.svg'
import search from '../assets/icons/search.svg'
import play from '../assets/icons/play.svg'
import share from '../assets/icons/share.svg'
import save from '../assets/icons/save.svg'

export default function MainPanel() {
    return (
        <div className="main-panel">
           <div className='left-panel'>
                {/* <img src={add} alt="Add Button" /> */}
                <span className='add-icon'></span>
                {/* <img src={search} alt="Search Button" /> */}
                <span className='search-icon'></span>
           </div>
           <div className='center-panel'>
                {/* <img src={play} alt="Play Button" /> */}
                <span className='play-icon'></span>
                <div className='dialogue-title'>Dialog Title</div>
           </div>
           <div className='right-panel'>
                {/* <img src={share} alt="Share Button" /> */}
                <span className='share-icon'></span>
                {/* <img src={save} alt="Save Button" /> */}
                <span className='save-icon'></span>
           </div>
        </div>
    )
}