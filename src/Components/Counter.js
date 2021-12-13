import React from 'react'

const Counter = () => {
    return (
        <>
            <div className="counter-section">

                <div className="counter-up">
                    <div className="content">
                        <div class="box">
                            <div className="icon"><i class="fas fa-history"></i></div>
                            <div className="counter">5000</div>
                            <div className="text">STUDENTS</div>
                        </div>
                        <div className="box">
                            <div className="icon"><i class="fas fa-gift"></i></div>
                            <div className="counter">500</div>
                            <div className="text">FACULTY</div>
                        </div>
                        <div className="box">
                            <div className="icon"><i class="fas fa-users"></i></div>
                            <div className="counter">400</div>
                            <div className="text">STAFF</div>
                        </div>
                        <div className="box">
                            <div className="icon"><i class="fas fa-award"></i></div>
                            <div className="counter">100</div>
                            <div className="text">Awards Received</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;
