import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SingleItemCard = ({ id, title, description, image, category, price, location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB2EOxVBOOD-7-MOsMxZX-OmwpwPQnDZtM&libraries=places`;
      window.document.body.appendChild(googleMapsScript);

      googleMapsScript.onload = initializeMap;
    };

    const initializeMap = () => {
      const geocoder = new window.google.maps.Geocoder();
      const mapElement = mapRef.current;
      const options = {
        center: { lat: 0, lng: 0 },
        zoom: 12,
      };
      const map = new window.google.maps.Map(mapElement, options);

      geocoder.geocode({ address: location }, (results, status) => {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          new window.google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        }
      });
    };

    loadGoogleMapsScript();

    return () => {
      if (window.google && window.google.maps) {
        window.google.maps.event.clearInstanceListeners(mapRef.current);
        window.google.maps.event.trigger(mapRef.current, 'resize');
      }
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, [location]);

  return (
    <div className='w-full flex flex-col flex-grow max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-white'>
      <img className='block mx-auto w-full h-100 rounded-t-lg' src={image} alt={title} />
      <div className='px-5 pb-5 flex-grow'>
        <h4 className='mt-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-900'>
          {title}
        </h4>
        <p className='py-2 text-sm font-light tracking-tight text-gray-900 dark:text-gray-900'>
          {description}
        </p>
        <div>
          <button className='px-5 py-1 text-sm font-light border rounded-full tracking-tight text-gray-900 dark:text-gray-900'>
            {category}
          </button>
        </div>
        <div className='py-2'>
          <div ref={mapRef} style={{ height: '200px', width: '100%', borderRadius: '5px' }}></div>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-xl font-bold text-gray-900 dark:text-gray-900'>{price}€</span>
          <Link
            to={`/item/${id}`}
            className='text-white bg-cyan-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Chat with ...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItemCard;
