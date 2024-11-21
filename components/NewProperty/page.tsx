"use client"


import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import SucessModal from "@/components/modals/SuccessModal";
import ErrorModal from "@/components/modals/ErrorModal";
import { useRouter } from "next/navigation";

import { BsPlus, BsX } from "react-icons/bs";
import { PropertyProps } from "@/types/Properties";
import CheckboxTwo from "../Checkboxes/CheckboxTwo";
import CheckboxFour from "../Checkboxes/CheckboxFour";
import CheckboxThree from "../Checkboxes/CheckboxThree";
import CheckboxFive from "../Checkboxes/CheckboxFive";

const initialProperty: PropertyProps = {
    name: '', price: '', path: '', details: '', tags: []
}
const NewProperty = () => {
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errMsg, setErrMsg] = useState('')
    const [showErrModal, setShowErrModal] = useState(false);
    const [formData, setFormData] = useState(initialProperty);

    const router = useRouter();

    const handleCategory = async (tag: string) => {
        if (formData.tags?.includes(tag)) { return }
        setFormData({
            ...formData,
            tags: [...formData.tags!, tag]
        })
    }
    const handleSubmit = async () => {
        if (!file) {
            setShowErrModal(true)
            setErrMsg("Please attach an image of the Property.")
            return
        }
        if (!formData.name) {
            setShowErrModal(true)
            setErrMsg("Please enter the Property name.")
            return
        }
        if (!formData.price) {
            setShowErrModal(true)
            setErrMsg("Please enter the Property cost.")
            return
        }
        if (!formData.tags) {
            setShowErrModal(true)
            setErrMsg("Please set the tags.")
            return
        }
        setFormData({ ...formData, tags: formData.tags });
        // console.log("Form Data => ", formData)
        const data = new FormData();
        // data.append('file', file);
        data.append('name', formData.name);
        data.append('cost', formData.price);
        data.append('categories', formData.tags.toLocaleString());

        setLoading(true)
        const res = await fetch(`http://localhost:3000/api/property/new`, {
            method: "POST",
            body: data,
        });
        console.log("Res => ", res)
        const result = await res.json();
        if (result.status) {
            setFormData(initialProperty);
            setLoading(false)
            setShowModal(true);
        } else {
            setErrMsg(result.message)
            setShowErrModal(true);
            setLoading(false)
        }
    }

    return (
        <>
            {
                loading && <Loader />
            }
            <SucessModal
                message="Succefully saved the Property."
                title="Property created"
                isOpen={showModal}
                onClose={() => {
                    setShowForm(false)
                    setShowModal(false);
                    router.refresh();
                }}
                url=""
            />
            <ErrorModal
                message={errMsg}
                title="Failed to create the Property"
                isOpen={showErrModal}
                onClose={() => {
                    setShowErrModal(false);
                    router.refresh();
                }}
                url=""
            />
            {!showForm &&
                <div
                    className="flex space-x-4 w-full p-2 item-center justify-center hover:cursor-pointer"
                    onClick={() => { setShowForm(!showForm) }}
                >
                    <span className="w-8 h-8 bg-stroke rounded-full p-2 flex items-center justify-center">
                        <BsPlus color="white" size={30} />
                    </span>
                    <p className="text-xl text-teal-600">
                        {showForm ? 'cancel entry' : 'add a new property listing'}
                    </p>
                </div>
            }
            {showForm &&
                <div className="rounded-2xl border border-stroke bg-white shadow-default">
                    <div className="border-b border-stroke px-6.5 py-4 flex justify-between items-center">
                        <h3 className="font-medium text-teal-600">
                            Add a new Property Listing
                        </h3>
                        <div className="bg-primary w-9 h-9 p-3 rounded-full flex items-center justify-center cursor-pointer" onClick={() => { setShowForm(false) }}>
                            <BsX size={30} color="white" />
                        </div>
                    </div>
                    <form >
                        <div className="p-6.5">
                            <div className="w-full flex justify-between mb-4">
                                <div className="flex flex-col w-3/5">
                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-sm font-medium text-black">
                                            Property Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Property Name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter  "
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value
                                                })
                                            }}
                                            value={formData.name}
                                        />
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-sm font-medium text-black">
                                            Property Cost
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Property Cost"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter  "
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    price: e.target.value
                                                })
                                            }}
                                            value={formData.price}
                                        />
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-sm font-medium text-black">
                                            Property Category
                                        </label>
                                        <div className="w-full flex space-x-3">
                                            <div>
                                                <label
                                                    htmlFor="house"
                                                    className="flex cursor-pointer select-none items-center"
                                                >
                                                    <div className="relative">
                                                        <input
                                                            type="checkbox"
                                                            id="house"
                                                            className="sr-only"
                                                            value={'house'}
                                                            onChange={(e) => {
                                                                handleCategory(e.target.value)
                                                            }}
                                                        />
                                                        <div
                                                            className={`box mr-4 flex h-5 w-5 items-center justify-center rounded-full border border-primary 
                                                                ${formData.tags?.includes('house') && "!border-4"
                                                                }`}
                                                        >
                                                            <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"></span>
                                                        </div>
                                                    </div>
                                                    House
                                                </label>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="checkboxLabelFive"
                                                    className="flex cursor-pointer select-none items-center"
                                                >
                                                    <div className="relative">
                                                        <input
                                                            type="checkbox"
                                                            id="checkboxLabelFive"
                                                            className="sr-only"
                                                            value={'plot'}
                                                            onChange={(e) => {
                                                                handleCategory('plot')
                                                            }}
                                                        />
                                                        <div
                                                            className={`box mr-4 flex h-5 w-5 items-center justify-center rounded-full border border-primary ${formData.tags?.includes('plot') && "!border-4"
                                                                }`}
                                                        >
                                                            <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"></span>
                                                        </div>
                                                    </div>
                                                    Plot
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col  w-[30%]">
                                    <label className="mb-3 block text-sm font-medium text-black">
                                        Select Property image
                                    </label>
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 "> PNG or JPG (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" onChange={(e) => { setFile(e.target.files?.[0]) }} />
                                    </label>
                                </div>
                            </div>

                            <button type="button" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                onClick={handleSubmit}>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}

export default NewProperty;