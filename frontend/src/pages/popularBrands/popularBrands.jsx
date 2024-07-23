import './popularBrands.scss';
import rolexLogo from "../../assets/rolex-logo.png";
import cartierLogo from "../../assets/cartier-logo.png";
import hamiltonLogo from "../../assets/hamilton-logo.png";
import hublotLogo from "../../assets/hublot-logo.png";
import ulysseLogo from "../../assets/ulysse-logo.png"

const PopularBrands = () => {
    return (
        <div className="popular-slider">
            <div className="popular-slide-track">
                <div className="popular-slide">
                    <img className='w-28 relative -top-4' src={rolexLogo} alt="Rolex" />
                </div>
                <div className="popular-slide">
                    <img className='w-full h-14 relative -top-[2px]' src={cartierLogo} alt="Cartier" />
                </div>
                <div className="popular-slide">
                    <img className='w-64 relative -top-28' src={hamiltonLogo} alt="Hamilton" />
                </div>
                <div className="popular-slide">
                    <img className='w-40 h-24 relative -top-4' src={hublotLogo} alt="Hublot" />
                </div>
                <div className="popular-slide">
                    <img className='w-full h-14 relative top-1' src={ulysseLogo} alt="Ulysse Nardin" />
                </div>
                <div className="popular-slide">
                    <img className='w-28 relative -top-4' src={rolexLogo} alt="Rolex" />
                </div>
                <div className="popular-slide">
                    <img className='w-full h-14 relative -top-[2px]' src={cartierLogo} alt="Cartier" />
                </div>
                <div className="popular-slide">
                    <img className='w-64 relative -top-28' src={hamiltonLogo} alt="Hamilton" />
                </div>
                <div className="popular-slide">
                    <img className='w-40 h-24 relative -top-4' src={hublotLogo} alt="Hublot" />
                </div>
                <div className="popular-slide">
                    <img className='w-full h-14 relative top-1' src={ulysseLogo} alt="Ulysse Nardin" />
                </div>
            </div>
        </div>

    );
}
export default PopularBrands;
