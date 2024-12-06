import './searchStyles.css';
import { useState, useEffect } from 'react';
import locationImg from '../../images/location.png';
import searchIcon from '../../images/search.png';
import downIcon from '../../images/down.png';

export default function Search() {
    const [location, setLocation] = useState('Fetching location...');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation('Geolocation is not supported by your browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                
                fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
                    .then((response) => response.json())
                    .then((data) => {
                        const { address } = data;
                        setLocation(`${address.city || address.town}, ${address.country}`);
                    })
                    .catch(() => setLocation('Unable to fetch detailed location.'));
            },
            (error) => {
                setError(error.message || 'Unable to fetch location.');
            }
        );
    }, []);

    return (
        <div className="search-container">
            <div className="location-container">
                <img src={locationImg} alt="Location Icon" />
                <div className="location">
                    <span>{location}</span>
                    <img className="drop-down" src={downIcon} alt="Dropdown Icon" />
                </div>
            </div>
            <div className="divider"></div>
            <div className="search">
                <img src={searchIcon} alt="Search Icon" />
                <input
                    type="text"
                    placeholder="Search for trees, plants, and planting accessories"
                />
            </div>
        </div>
    );
}