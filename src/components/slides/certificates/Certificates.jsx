import React from 'react'
import './certificate.css'
import azure from '../../../assets/images/certificates/Ms.jpg'
import aws from '../../../assets/images/certificates/aws.png'
import react from '../../../assets/images/certificates/react.png'
import python from '../../../assets/images/certificates/python.png'
import RPA from '../../../assets/images/certificates/RPA.png'
import { MdCancel } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useState } from 'react'
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const certificateData = [{
    ord: 1,
    img: azure,
    name: "Azure Fundamentals"
},
{
    ord: 2,
    img: aws,
    name: "AWS Certified Cloud Practitioner"
}, {
    ord: 3,
    img: react,
    name: "React Js (Basic)"
}, {
    ord: 4,
    img: python,
    name: "Python (Basic)"
}, {
    ord: 5,
    img: RPA,
    name: "RPA Devloper Foundatoin"
}]


function Certificates() {

    const [isPreview, setPreview] = useState(false);
    const [previewImage, setPreviewImage] = useState(0);

    const close = (e) => {
        let getTagName = e.target.id;
        setPreview(!isPreview);
    }


    const Navigations = (props) => {
        return <>
            {
                certificateData.map((data, index) =>
                    props.data == index ? <span key={'agIndexImg' + index} onClick={event => selectIndex(event, index)}><FaCircle /></span> 
                                        : <span key={`agIndexImg${index}`} onClick={event => selectIndex(event, index)} ><FaRegCircle /></span>)
            }
        </>
    }

    const setImage = (e) => {
        setPreviewImage(e.target.getAttribute('previewWindow'));
        setPreview(!isPreview);
    }

    const getNextImage = () => {
        setPreviewImage((previewImage >= certificateData.length - 1) ? 0 : parseInt(previewImage) + 1);
    }

    const getPrevImage = () => {
        setPreviewImage((previewImage <= 0) ? certificateData.length - 1 : previewImage - 1);
    }

    const selectIndex = (e, params) => {
        let a = params;
        setPreviewImage(a);
    }

    const Preview = (props) => {

        return (
            <>
                {isPreview && <div className='preview'>
                    <div className='cancel-window' onClick={close}><MdCancel id='close' /></div>
                    <div className='preview-container'>
                        <div className='preview-window'>
                            <img src={certificateData[props.data].img} id='preview-image' />

                        </div>
                        <div className='preview-controller'>
                            <GrPrevious className='prev' onClick={getPrevImage} />
                            <div className='navigations'><Navigations data={props.data} /></div>
                            <GrNext className='next' onClick={getNextImage} />
                        </div>
                    </div>
                </div>}</>)
    }
    return (
        <div className='Certificates'>
            <div className='certificates-container'>
                <div className='Certificate-row'>
                    {
                        certificateData.map((data, index) =>
                            <div key={"certificate" + index} className='certificates-item'>
                                <div className='certificate-img' >
                                    <img src={data.img} previewWindow={index} onClick={setImage} />
                                </div>
                                <div className='certificate-detail'>
                                    <p>{data.name}</p>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            {
                isPreview && <Preview data={previewImage} />
            }
        </div>
    )
}

export default Certificates
