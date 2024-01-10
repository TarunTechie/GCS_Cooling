export default function Bottom()
{
    return(
        <footer className="xl:flex flex-row place-content-between">

        <div className="text-white font-bold">
                <h1 className="pb-5 underline font-bolder text-2xl">CONTACT US</h1>
            <span className="flex flex-row pb-5"><img src="src/assets/icons/phone.svg" alt="PHONE-NUMBER" className="pr-3"/>+91-9731399099</span>
            <a href="mailto:gcshvacworks@gmail.com"><span className="flex flex-row pb-5"><img src="src/assets/icons/mail.svg" alt="MAIL-ID" className="pr-3"/>gcshvacworks@gmail.com</span></a>
            <a href="https://maps.app.goo.gl/sk8WLS3c1SgFPy5y6" target="blank"><span className="flex flex-row pb-5"><img src="src/assets/icons/location.svg" alt="ADDRESS" className="pr-3"/>
            Narayanachar complex,Sulibele Road,<br/>Shanthinagar,Devanhalli Town,<br/>Bangalore-562110</span></a>
        </div>

            <div className="items-end">
                 <iframe className="sm: w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.7094541090332!2d77.7167553!3d13.2435415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d61f5ae09b5%3A0x42354cddb7c37c52!2sAqua%20Water%20Solution%2C%20KENT%20Authorized%20Dealers%20and%20service%20center!5e0!3m2!1sen!2sin!4v1704803074496!5m2!1sen!2sin"loading="lazy"/>
                <div className="flex">
                <a href="https://www.instagram.com/gcs_1988?igsh=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr" target="blank">
                    <span className="flex flex-row pb-5"><img src="src/assets/icons/instagram.svg" alt="MAIL-ID" className="pr-3 w-10 h-10" /></span></a> 
                <a href="https://www.instagram.com/gcs_1988?igsh=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr" target="blank">
                    <span className="flex flex-row pb-5"><img src="src/assets/icons/instagram.svg" alt="MAIL-ID" className="pr-3 w-10 h-10" /></span></a>          
                <a href="https://www.instagram.com/gcs_1988?igsh=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr" target="blank">
                    <span className="flex flex-row pb-5"><img src="src/assets/icons/instagram.svg" alt="MAIL-ID" className="pr-3 w-10 h-10" /></span></a>      
                </div>                       
            </div>

        </footer>
    )
}