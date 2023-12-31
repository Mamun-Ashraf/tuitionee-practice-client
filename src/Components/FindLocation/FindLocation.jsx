import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHeader } from '../../Contexts/HeaderProvider';

const FindLocation = ({ children }) => {

    const {isEnglish, translations } = useHeader();
    const { address, chooseDivision, chooseDistrict, chooseUpazila } = translations.leafletHouseTuition;

    const { register } = useForm();

    const [country, setCountry] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedupazila, setSelectedupazila] = useState('');

    
        if(isEnglish){
            useEffect(() => {
            fetch('locationEn.json')
            .then(res => res.json())
            .then(data => {
                setCountry(data);
            })
        }, [isEnglish])
        }
        else{
            useEffect(() => {
                fetch('location.json')
                .then(res => res.json())
                .then(data => {
                    setCountry(data);
                })
            }, [isEnglish])
        }
        
    

    const handleChangingDivision = event => {
        const division = event.target.value;
        setSelectedDivision(division);
        setSelectedDistrict = '';
        setSelectedupazila = '';
    }

    const handleChangingDistrict = event => {
        const district = event.target.value;
        setSelectedDistrict(district);
        setSelectedupazila = '';
    }

    const handleChangingUpazila = event => {
        const upazila = event.target.value;
        setSelectedupazila(upazila);
    }

    return (
        <div>
            <label className='font-bold'>{address} :</label>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ms-16'>
                <select {...register('division')} onChange={handleChangingDivision} value={selectedDivision} className='p-2 focus:outline-none text-darkColor rounded'>
                    <option>{chooseDivision}</option>
                    {
                        country.map(divisions => <option
                            key={divisions.division}>
                            {divisions.division}
                        </option>)
                    }
                </select>

                <select {...register('district')} onChange={handleChangingDistrict} value={selectedDistrict} className='p-2 focus:outline-none text-darkColor rounded'>
                    <option>{chooseDistrict}</option>
                    {
                        selectedDivision &&
                        country.find(divisions => divisions.division === selectedDivision).districts.map(district => <option
                            key={district.district}>
                            {district.district}
                        </option>)
                    }
                </select>

                <select {...register('upazila')} onChange={handleChangingUpazila} value={selectedupazila} className='p-2 focus:outline-none text-darkColor rounded'>
                    <option>{chooseUpazila}</option>
                    {
                        selectedDistrict &&
                        country
                            .find(divisions => divisions.division === selectedDivision)
                            .districts.find(district => district.district === selectedDistrict)
                            .upazilas.map(upazila =>
                                <option key={upazila}>
                                    {upazila}
                                </option>
                            )}
                </select>

                {children}

            </div>

        </div>
    );
};

export default FindLocation;