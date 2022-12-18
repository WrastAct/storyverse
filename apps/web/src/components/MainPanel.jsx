import { useCallback } from 'react';
import { TextInput } from '@mantine/core';
import './MainPanel.css';

export default function MainPanel({onAddNode, onSave, onLoad, dialogTitle, setDialogTitle}) {
     const onChange = useCallback((evt) => {
          setDialogTitle(evt.target.value);
     }, []);

    return (
        <div className="main-panel">
           <div className='left-panel'>
                {/* <img src={add} alt="Add Button" /> */}
                <span className='add-icon' onClick={() => onAddNode()}></span>
                {/* <img src={search} alt="Search Button" /> */}
                <span className='search-icon'></span>
           </div>
           <div className='center-panel'>
                {/* <img src={play} alt="Play Button" /> */}
                <span className='play-icon'></span>
                <div className='dialogue-title'>
                {/* <input className='dialogue-title-editor' type="text" name="input" value={dialogTitle} onChange={onChange}></input> */}
                <TextInput className='dialogue-title-editor' value={dialogTitle} onChange={onChange}></TextInput>
                </div>
           </div>
           <div className='right-panel'>
                {/* <img src={share} alt="Share Button" /> */}
                <span className='share-icon'></span>
                {/* <img src={save} alt="Save Button" /> */}
                <span className='save-icon' onClick={() => onSave()}></span>
                <span className='load-icon' onClick={() => onLoad()}></span>
           </div>
        </div>
    )
}