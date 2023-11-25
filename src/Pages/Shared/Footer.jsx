import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../Contexts/LanguageProvider';

const Footer = () => {
    const { translations } = useLanguage();
    const { address, place, available, links, home, about, blog, terms, follow } = translations.footer;
    return (
        <footer className='mt-12 bg-[#213547] text-white p-8 md:p-20 grid grid-cols-1 md:grid-cols-3'>
            <div className='mb-8 md:mb-0'>
                <h6 className='text-xl font-semibold mb-3 underline'>{address}</h6>
                <div className='flex flex-col gap-2'>
                    <p>{place}</p>
                    <p><EnvelopeIcon className='mr-2 h-6 w-6 inline'></EnvelopeIcon> abc@def.com</p>
                    <p><PhoneIcon className='mr-2 h-6 w-6 inline'></PhoneIcon> 01322444555, 01644777888</p>
                    <p>{available}</p>
                </div>

            </div>
            <div className='mb-8 md:mb-0'>
                <h6 className='text-xl font-semibold mb-3 underline'>{links}</h6>
                <div className='flex flex-col gap-2'>
                    <Link to='/'>{home}</Link>
                    <Link to='/'>{about}</Link>
                    <Link to='/'>{blog}</Link>
                    <Link to='/'>{terms}</Link>
                </div>
            </div>
            <div className='mb-8 md:mb-0'>
                <h6 className='text-xl font-semibold mb-3 underline'>{follow}</h6>
                <div className='flex gap-6 text-2xl'>
                    <Link to='/'><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link to='/'><FontAwesomeIcon icon={faLinkedin} /></Link>
                    <Link to='/'><FontAwesomeIcon icon={faXTwitter} /></Link>
                    <Link to='/'><FontAwesomeIcon icon={faYoutube} /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;