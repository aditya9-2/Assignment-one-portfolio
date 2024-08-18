
const Contacts = () => {

    const CONTACT = {
        address: "Newtown, Kolkata, West BEngal",
        email: "adityabasak7031@gmail.com",
    };
    return (
        <div className="border-b border-neutral-900 pb-20">

            <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">
                    {CONTACT.address}
                </p>
                <a href="#" className="border-b">
                    {CONTACT.email}
                </a>
            </div>

        </div>
    )
}

export default Contacts
