'use client';
import {
  GeolocationControl,
  Map,
  Placemark,
  SearchControl,
  useYMaps,
  YMaps,
} from '@pbe/react-yandex-maps';
import { useState } from 'react';

interface IAddress {
  address: string;
  coords: number[];
}

const MapComponent = ({
  coords,
  onCoordsChange,
  onAddressChange,
}: {
  coords: number[];
  onCoordsChange: (coords: number[]) => void;
  onAddressChange: (address: string, coords: number[]) => void;
}) => {
  const handleMapClick = async (e: any) => {
    const newCoords = e.get('coords');
    onCoordsChange(newCoords);
    await getAddress(newCoords);
  };

  const ymaps = useYMaps(['geocode']);

  const getAddress = async (coordinates: number[]) => {
    try {
      if (!ymaps) return;

      if (!Array.isArray(coordinates) || coordinates.length !== 2) {
        throw new Error('Invalid coordinates');
      }

      const res = await ymaps.geocode(coordinates, { results: 1 });

      const firstGeoObject = res.geoObjects.get(0);
      if (!firstGeoObject) return;

      const value = firstGeoObject.properties.get('text', {}) as unknown as string | undefined;

      const newAddress = typeof value === 'string' && value ? value : 'Адрес не найден';

      onAddressChange(newAddress, coordinates);
    } catch (err) {
      console.error('Geocode failed:', err);
    }
  };

  return (
    <Map
      onClick={handleMapClick}
      defaultState={{ center: [42.8746, 74.5698], zoom: 12 }}
      width="100%"
      height="400px"
      modules={['geocode']}
    >
      <Placemark geometry={coords} />
      <SearchControl options={{ float: 'right' }} />
      <GeolocationControl options={{ float: 'left' }} />
    </Map>
  );
};

const AddressPicker = ({ onAddressSelect }: { onAddressSelect: (data: IAddress) => void }) => {
  const [coords, setCoords] = useState<number[]>([42.8746, 74.5698]); // Бишкек дефолт
  const [address, setAddress] = useState<string>('');

  const handleCoordsChange = (newCoords: number[]) => {
    setCoords(newCoords);
  };

  const handleAddressChange = (newAddress: string, newCoords: number[]) => {
    setAddress(newAddress);
    onAddressSelect({ address: newAddress, coords: newCoords });
  };

  return (
    <div style={{ width: '100%', marginBottom: '20px' }}>
      <p>
        <b>Карта:</b>{' '}
        {address ||
          'Перетащите маркер или щёлкните по зданию, чтобы уточнить вход. Номера на карте лучше видны при сильном приближении (колёсико или «+»).'}
      </p>

      <YMaps
        query={{
          apikey: 'YOUR_API_KEY', //API KEY надо добавить потом
          lang: 'ru_RU',
          load: 'package.full',
        }}
      >
        <MapComponent
          coords={coords}
          onCoordsChange={handleCoordsChange}
          onAddressChange={handleAddressChange}
        />
      </YMaps>
    </div>
  );
};

export default AddressPicker;
