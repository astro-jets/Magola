"use client";

import { useState, useEffect } from "react";
import { PropertyProps } from "@/types/Properties";
import Loader from "../common/Loader";
import SuccessModal from "../modals/SuccessModal";
import ErrorModal from "../modals/ErrorModal";

interface EditPropertyFormProps {
    property?: PropertyProps; // Pass property if editing, leave undefined for creation
    onClose?: () => void; // Optional callback for modal close
}

const EditPropertyForm: React.FC<EditPropertyFormProps> = ({ property, onClose }) => {
    const [formData, setFormData] = useState<PropertyProps>({
        _id: property?._id || "",
        name: property?.name || "",
        cost: property?.cost || "",
        details: property?.details || "",
        path: property?.path || "",
        tags: property?.tags || [],
    });
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showErrModal, setShowErrModal] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const handleSubmit = async () => {
        if (!formData.name || !formData.cost || !formData.details || formData.tags?.length === 0) {
            setShowErrModal(true);
            setErrMsg("All fields are required.");
            return;
        }

        const data = new FormData();
        if (file) data.append("file", file); // Append new image file if provided
        data.append("name", formData.name);
        data.append("cost", formData.cost);
        data.append("details", formData.details);
        data.append("categories", JSON.stringify(formData.tags));

        setLoading(true);

        const url = formData._id
            ? `http://localhost:3000/api/property/update/${formData._id}`
            : "http://localhost:3000/api/property/new";

        const method = formData._id ? "PUT" : "POST";
        const res = await fetch(url, { method, body: data });

        const result = await res.json();
        setLoading(false);

        if (result.status) {
            setShowModal(true);
        } else {
            setErrMsg(result.message);
            setShowErrModal(true);
        }
    };

    return (
        <>
            {loading && <Loader />}
            <SuccessModal
                url=""
                title="Success"
                message={"Property created successfully."}
                isOpen={showModal}
                onClose={() => { setShowModal(false); }}
            />
            <ErrorModal
                url=""
                title="Something went wrong"
                message={errMsg}
                isOpen={showErrModal}
                onClose={() => setShowErrModal(false)}
            />
            <form className="p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">{formData._id ? "Edit Property" : "Add New Property"}</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Property Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Cost</label>
                    <input
                        type="number"
                        value={formData.cost}
                        onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Details</label>
                    <textarea
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Tags</label>
                    <input
                        type="text"
                        placeholder="Enter tags, separated by commas"
                        value={formData.tags?.join(",")}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",") })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Image</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files?.[0])}
                        className="mt-1 block w-full text-sm"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-teal-600 text-white rounded-md"
                >
                    {formData._id ? "Update Property" : "Create Property"}
                </button>
            </form>
        </>
    );
};

export default EditPropertyForm;
