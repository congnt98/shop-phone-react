import React from "react";
import '../../acsets/css/notfound404.css'
class NotFound404 extends React.Component {
    render() {
        return (
            <>
                <div className="error">
                    <div className="container-floud">
                        <div className="col-xs-12 ground-color text-center">
                            <div className="container-error-404">
                                <div className="clip"><div className="shadow"><span className="digit thirdDigit"></span></div></div>
                                <div className="clip"><div className="shadow"><span className="digit secondDigit"></span></div></div>
                                <div className="clip"><div className="shadow"><span className="digit firstDigit"></span></div></div>
                                <div className="msg">OH!<span className="triangle"></span></div>
                            </div>
                            <h2 className="h1">Sorry! Page not found</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default NotFound404