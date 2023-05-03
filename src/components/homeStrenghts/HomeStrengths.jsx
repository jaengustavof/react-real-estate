import React from 'react';
import './homestrengths.scss';
import {AboutEffects} from './homestrengths';
import strengths from '../../assets/imgs/strenghs/strength.webp';

const HomeStrengths = () => {
    return (
        <div id='home-strengths'>
            <div className='home-strengths-text'>
                
            </div>
            <div className='home-strengths-image'>
                    <img src={strengths} alt='trust us' className='home-strengths-image_img' id='aboutImage'/>
            </div>
            <div className='home-strengths-container'>
                <div className='text-container-info_pre' id='pre'>
                <h2 className='text-container-info_heading'>You’re in good hands</h2>
                    <p className='text-container-info_text'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                    <div className='text-container-info_button'>
                        <span>
                            Learn more 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeStrengths;
