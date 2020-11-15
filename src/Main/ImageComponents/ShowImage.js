import React from 'react'

function ShowImage({image}) {
    const noImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU';

    return (
        <div className='profileImageContainer'>
            <div className='profileImg'>
                <div className='imgHolder'>
                    <img src={image ? image : noImage} alt="" id="img" className="img" width="280px" height="280px"/>
                </div>
            </div>
        </div>
    )

}

export default ShowImage