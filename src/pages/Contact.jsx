import Booking from "../components/screen/Contact/Booking";
import Calender from "../components/screen/Contact/Calender";
import ContactHero from "../components/screen/Contact/ContactHero";
import FAQ from "../components/screen/Contact/FAQ";

const Contact = () => {
    return (
        <div>
            <ContactHero/>
            <Booking/>
            <Calender/>
            <FAQ/>
        </div>
    );
};

export default Contact;