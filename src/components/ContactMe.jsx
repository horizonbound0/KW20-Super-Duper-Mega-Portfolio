export default function ContactMe(props) {
    console.log(props);
    return (
        <div className="border container">
            <h1>Contact Me</h1>
            <form action="#" className="needs-validation ">

                <div className="form-row row">

                    <div className="col-md-4 mb-3">

                        <label htmlFor="validateCustom01">Name</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Name" required />
                        <div className="valid-feedback">✔</div>

                    </div>

                    <div className="col-md-4 mb-3">

                        <label htmlFor="validationCustom02">Email</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Email" required />
                        <div className="valid-feedback">✔</div>

                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validateCustom03">Message</label>
                        <textarea name="message" id="validateCustom03" className="form-control" required></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}