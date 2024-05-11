import { useState } from "react";
import { data } from './data';


function GiftForHIM() {
    const [gift, setGift] = useState(5);
    const {number, title, description, price, image} = data[gift];
    const [showText, setShowText] = useState(false);

    const previousGift = () => {
        setGift((gift => {
            gift --;
            if (gift < 5) {
                return data.length-6;
            }
            return gift;
        }))
    }

    const nextGift = () => {
        setGift((gift => {
            gift ++;
            if (gift > data.length-6) {
                gift = 5;
            }
            return gift;
        }))
    }

        return (
                <div className='items'>
                    <h2>GIFT FOR HIM</h2>

                    <div className="img">
                        <img src={ image } alt='gifty' width='200px'/>
                    </div>
                    <div>
                        <h2>{ number } {title}</h2>
                    </div>
                    <div>
                        <p>{showText ? description : description.substring(0, 25) + '...'}
                            <button onClick={() => setShowText(!showText)} className="show">
                                {showText ? 'show less' : 'show more'}
                            </button>
                        </p>
                    </div>
                    <div>
                        <h3>{ price }</h3>
                    </div>

                    <div className='buttons'>
                        <button onClick={previousGift}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiElEQVR4nO2aSWsUURDHf8GYjChqJmbBkx4lon4Jl7jG3OJyU+LFhejV5ayeAgE/hxJDAipx342KS0w8uRxEvRkVlZHCf0OhM5Punl5G8Q8Nmbx6r+p11avtNfzHv4si0AOcAoaB58BH4Kse+/uZxoxmG9BCnaAA7AbGgB9AKeLzHRgFdgHNeWxgHnAYeOuE+gJcBI5KMyv0xufqadH/bOwYcElzgvlvgAG9nEywCXjpBLgD7AEWxVhrMbAXuOvWmwa6SRH2ps44hveAdQmuvwF44NYfSkM7nRLcGHwC9gNzkmbCrzUPAjNO2x1JLb5c6i7J66wkfawCJsVzSjLUhDa34G1gCdmhBbgq3i9lFbFQcOZ0HZhP9pgP3HRmFuvMnHHmZMEuL7Q6qzAHENnFBgc7izMR5szMSCbzbqGDXRAnzDvVCw65wx/KxI64OJGGi42LRmBCstmmqqJZqYIRr6X+sFGyvZ1NK7uch4iDTqUbN0gHDc6T7qhGOCYiy53ibOKp5t8X0zTQLx4jlQiKSqu/xEgAO9wmntUSvEIGSqtvvlWSc7sEuUA0tAOPNdeKqaWkj3Hx21Ju8LQGrZ6IooknGWnC44R4nqQMhjW4lfB5WNaa+N16zlIGLzRoVVwUc8pSEwG63Av8Ax80WAyhiUc5aSLAEvF/Rxl81WATldHgNpHmc4XZA3fQJ4i9kYcZbORyLRuJY1qTOZlWWzXT+mcO+7AGrQMY1f1mrZneau43CIjWPPurA2KPBq1bGAXtOWhmXPw2V0rGgqTROoD1mjQWXdK4sBLRqISxNmYtabxVcmlhn3icr0a0U0RWHBFzMxNq4aSBBtU6JmPfbIHmtQjXU3/YLNlehbmGGHBVXr01Hx5KtgNhJhRcr9cayvWCAecZQ18KdWvSjJpjeWMN8FkyRb7KGHJvwNqWeaFNTTmTZTDOAgW1hUryQnk0sRcAtyTDrVruGduUmAXXCvY7KxSBa+I9ncSFz3KnWjOz1WRzJqbE07LyZUkt3OHMbEa9V3OHSaNR3umzMyfL5RJFwTmAIA3pTjBi21WGrz4H07573+DUHnTt+2N+xVBU7hSkHSWZUpK3xbNq55BLZ0rKSC29Pq6+U5fcdpOeVl0a9Ypm3PUJgrTjQF5fQDSrKz6iEiBqk+GbKtO+vDZQDovUi7Wq7Zzqkvfuo5r3SvPPimZLtXriP/jL8RMhpXAUmuIBHwAAAABJRU5ErkJggg==" alt='clickBack' width='35px'/>
                        </button>

                        <button onClick={nextGift}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADg0lEQVR4nO2ay08UQRDGfyiyazAiC7hwk6PBqP+ECgqK3FC8afAiEvTq46yeSEj4OzBIIFFDosYngk+eJ5WDEW8uEDRrOn6TdHAfM8POA8KXTHhUdXf1VHV19dcD29i6SAHtwF1gGJgGfgKreszvnyUzOmeAamKCJHABGAP+AFmPz29gFOgCElFMYDdwDVi0jFoBHgE35JmDeuO79FTrf0Z2E3isNk77b0CfXk4oOAUsWAa8Ai4CVT762gdcAl5b/c0DLQQI86YGrQHfAMdL2H8z8NbqfyAI79TLcDPAL+AKsLPUg/Cvz6tAxvJ2ulSdN8rdWWWdQwSPw8CMxpyTDRtCndXhS6CW8FANPNHYC4oKX0ha4fQMqCR8VALPrTDztWYGrXAym11UqLGiwiQAzynWWdhhrAk3ayYjm0x2c73ZOfuEyU5xQa+1+F2F2HVrnwgixfpFOTAp28ykCiKhUsEoHyN+OCnbFot5pcvKEEFhAnjnM52WWZn0XCHFMSmZ2ikoTGmMTz4n0632I/kUUiqrV3wWgG5Rr5TuTCbtY6NcBdby2XlWnT8keOwHPmg8cwBr8Nh+XG3bcgnvSWjOE2HA9sxHj565rXZ3cgmHJTxNeLA9Yybl1jNO9AzlEs5KaE5xYcL2zHtNrhiarLD8D0sSRlFXrfdMfRH9Wul+zyVclbCiSB53dtcgn0kXG7fDE/iayA5taLGeyFKEoZX2GFp1hUJryyz2YQkNAxiVJxpctusolH6dDdGQZ5t6Q2yX0LCFYXpiIyVKa75izCkaDQMY16IxZRWNe/MpjWoAQ2PGtYy/rPYPCimdl5LhYoPCC1Gjfg9WE7Kxs9hG81WKJ4gfWmXbFzfXEH1Snogh+TAl23rcNEhaXK8hlOOCPtk04+VSqEWNMiLHosZRYFk2eb7KGLDegKEto0KdSDljS7+fDpKihbIikqMgsfcoy2X1M7GRtzFtXSuYv8NCCniqsedLceHTaLnWhNkRwlkTcxrTVOUHStVx2gqzjLhXkw5LjXJlp2UrnNyU9Z7XzMC6U1ypbl/LdJUxZfXfH/Tde7Pldoe17/b5FUNKtZN9fJ4t8W1xUe/0WuVMVhWpKa9viXdqUtqu0FOjS6MO6YxbPIFTdvRE9QVEQqz4iI4AXkmGNZ1MO6OaQC5UiYs1p7b7OnP8sD6q+aHSfUg6bYXOE9tgk+Mvs7BwO2/6kC8AAAAASUVORK5CYII="  alt='clickGo' width='35px'/>
                        </button>
                    </div>
                </div>
    );
}

export default GiftForHIM;
