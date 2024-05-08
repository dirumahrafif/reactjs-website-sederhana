import '../styles/Contact.css'
import parse from 'html-react-parser'
function Contact(props) {
    return (
        <div id="contact">
            <div className="wrapper">
                <div className="footer">
                    {
                        props.contactSection.map((item, index) => {
                            return (
                                <div className="footer-section">
                                    {parse(item.content)}
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Contact