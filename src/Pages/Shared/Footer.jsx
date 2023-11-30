import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useHeader } from '../../Contexts/HeaderProvider';
import LinkButton from '../../Components/GenericButton/LinkButton';

const Footer = () => {
    const { translations, darkMode } = useHeader();
    const { address, place, available, links, home, about, blog, terms, follow } = translations.footer;
    return (
        <footer className={`${darkMode ? 'dark' : 'bg-blueFoot text-white'} mt-10 p-8 md:p-20 grid grid-cols-1 md:grid-cols-3`}>
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
                    <LinkButton to='/'>{home}</LinkButton>
                    <LinkButton to='/about'>{about}</LinkButton>
                    <LinkButton to='/blog'>{blog}</LinkButton>
                    <LinkButton to='/terms'>{terms}</LinkButton>
                </div>
            </div>

            <div className='mb-8 md:mb-0'>
                <h6 className='text-xl font-semibold mb-3 underline'>{follow}</h6>
                <div className='flex gap-6 text-2xl'>
                    <LinkButton to='/'><FontAwesomeIcon icon={faFacebook} /></LinkButton>
                    <LinkButton to='/'><FontAwesomeIcon icon={faLinkedin} /></LinkButton>
                    <LinkButton to='/'><FontAwesomeIcon icon={faXTwitter} /></LinkButton>
                    <LinkButton to='/'><FontAwesomeIcon icon={faYoutube} /></LinkButton>
                </div>
            </div>
        </footer>
    );
};

export default Footer;