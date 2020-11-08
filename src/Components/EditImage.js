import React from 'react'

function EditImage({handleImage}) {

    function imageHandler(e) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 0) {
                return
            }
            if (reader.readyState === 2) {
                handleImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className='profileImageContainer'>
            <div className='profileImg'>
                <label htmlFor="input">Choose your image: </label>
                <input type="file" name="image-upload" id="input" accept="/image/*" onChange={imageHandler}/>
            </div>
        </div>
        )
}

export default EditImage