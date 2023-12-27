import React from 'react'
import { BsEnvelope, BsFacebook, BsInstagram, BsLinkedin, BsTelephone, BsTwitter, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className='h-[10vh]'>
                <div>
                    <div>Logo</div>
                    {/* <img src="" alt="" /> */}
                    <a href=""><BsEnvelope /><span>itsakash18.06@gmail.com</span></a>
                    <a href=""><BsTelephone /><span>+91 6207234759</span></a>
                    <div>
                        <a href=""><BsLinkedin /></a>
                        <a href=""><BsFacebook /></a>
                        <a href=""><BsWhatsapp /></a>
                        <a href=""><BsInstagram /></a>
                        <a href=""><BsTwitter /></a>
                    </div>
                </div>
                <div>
                    <div>midd</div>
                    <div>right</div>
                </div>

            </footer>
        </>
    )
}

export default Footer
