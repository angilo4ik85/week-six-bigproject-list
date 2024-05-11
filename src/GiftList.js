import { useState } from 'react';
import { data } from './data';

function GiftList() {
    const [gifts, setGifts] = useState(data);

    const deleteGift = (id) => {
    let newGifts = gifts.filter(gift => gift.id !== id);
    setGifts(newGifts);
    }

    return (

    <div>
        <div className='Head'>
            <h2>Gifts</h2>
            <button className='btn' onClick={() => setGifts([])}>clear all</button>
        </div>

        <div className='List'>
        {gifts.map((item => {
            const {id, title, image} = item;

        return(<div key={id} className='Gift'>

            <img src={ image } alt='gifty' width='200px'/>
            <h3>{ id } { title }</h3>
            <button onClick={() => deleteGift(id)}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnUlEQVR4nO2aSU8UURDHf0aEMRiRQUBvcjQY9UuooKjIze2m0YtL0KvLGT2ZmPA5NEggUYMrAu6JAsrJ5aLx5ghRM6biv5MKztLd07NI+CedDLyq6nqv6tWrqtewjKWLNNALXAGGgGngG7Cgx36/1ZjR7AeaqRGkgKPAKPAbyEZ8fgEjwBGgoRoTWA2cAz47peaBO8AFWWazVnyVnmb9z8YuAnfFE/B/Avq1OBXBHmDOKTAJHAOaYshaBxwHppy890A3ZYSt1KB74VNgZ4Lyu4DnTv71clhngxS3F3wHTgErk34Jf2WeATLO2u1JCe+QubOKOlsoP7YCM3rnO+lQElqdwAlgPZVDM/BA756TV8RCyrnTI6CRyqMRGHduFmvPDDp3ssOuWmhxXmEBIHKIDTZ2JfZEmD2TkU4W3UIfdsE5YdGpVnDWbf5QLnbenRPlCLFxUQe8kG42qYJoUKpgxDuoPeyWbp+LWeWIixBhcU8pRlsMxdpk+fsh6Ve4SHqoEOGoiCx3CosJ8byOOJk28Rjvkwh8J8QznI8grbR6PmIC6BUKO5k4PP6gtPrmZz49D0jwbeJlAK/cubMxAm2cE3tM/HtzDV7VoNUTcRBmlUuxhMdlyRggB4Y0uI/4KGSZJCyx2HtukAOzGrQqrhTkWvWkLBGgU7KsL/APvmrQcptSsVjxJCeBsnCT94UcWNBgPcnAu1IS7rT44A76BFWZSKFoFgUFJ7JkXGt2qWz2IQ1aBzAuCoXYKIdmMfQVCr/BgWjNs//6QOzVoHULoyLKYZeEZcbE35MvGQuSRusA1mrSmHZJ49p8RCMSbm3MsJhMII23UiAsTornViGiwyKyQiksHpdYWE1JRhhYYfVMOh4sdtB8FOEuag890u1DmGuIfhE/q8Hmw0vpdjoMQ8r1eq2hXCvol04zUS6FusWUUXOs2tgO/JBOka8yrrsVSCL/iotWNeVMl2txBKRcaB2vUhN7jTosQaeloZTVmHax3v6uFNLAQ3cdV/KFT4czrbnZNiqzJ97pnZaVb0pKcLtzs4x6rxYOk0adotMP505J1C//7JkgAGTVUE7q9nWFrjJeOvnXyn333uXMHnTtT8T8iiGt3ClIO7JypSRvi4ta56xLZ7LKSC29vqS+U6fCdr2eFl0a9YlmzPUJgrTjdLW+gGhQV3xYJUA24vNTlenBak0gF5rUi7Wq7aaKpq/uoxr7/Ubl6YBo89YTy+A/xx+3026HVKnF7QAAAABJRU5ErkJggg==" alt='clickDelete' width='35px'/>
            </button>

        </div>)
        }))}
        </div> 
    </div>
    )
}

export default GiftList;