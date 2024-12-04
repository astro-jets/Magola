"use client";

import { PropertyProps } from "@/types/Properties";
import { useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
const ExtraEditForm = ({ property }: { property: PropertyProps }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<PropertyProps>({
        _id: property._id,
        name: property.name,
        cost: property.cost,
        details: property.details,
        path: property.path,
        tags: property.tags,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        const response = await fetch(`/api/property/update`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
            alert("Property updated successfully!");
            setIsEditing(false);
        } else {
            alert("Failed to update property. Please try again.");
        }
    };

    return (
        <div className="w-full flex items-center justify-center p-8">
            <div className="w-3/4">
                {!isEditing ? (
                    <div className="min-h-[30rem] pb-2 flex flex-col">
                        {/* Action buttons */}
                        <div className="my-4 flex flex-wrap gap-2">
                            <button
                                className="bg-teal-500 w-12 h-12 p-2 flex items-center justify-center rounded-full"
                                onClick={() => setIsEditing(true)}
                            >
                                <BsPencil size={20} color="#fff" />
                            </button>

                        </div>

                        {/* Property Image */}
                        <div className="p-1 flex items-center justify-center max-h-90 h-90 overflow-hidden bg-gray-100 rounded-2xl">
                            <img
                                className="h-[100%] w-[100%] group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src={property.path}
                                alt="Property"
                            />
                        </div>

                        {/* Property Details */}
                        <div className="pt-4">
                            <h3 className="text-lg font-medium text-black">{property.name}</h3>
                            <p className="mt-1 text-gray-600">{property.details}</p>
                            <h3 className="mt-3 text-lg font-medium text-black">Categories</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {property.tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs rounded-xl"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-8 bg-white rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">Edit Property</h2>
                        <form>
                            {/* Property Name */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Property Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                />
                            </div>

                            {/* Property Cost */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Cost</label>
                                <input
                                    type="number"
                                    name="cost"
                                    value={formData.cost}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                />
                            </div>

                            {/* Property Details */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Details</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                />
                            </div>

                            {/* Property Tags */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Tags (Comma-separated)</label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={formData.tags?.join(", ")}
                                    onChange={(e) =>
                                        setFormData({ ...formData, tags: e.target.value.split(",").map((tag) => tag.trim()) })
                                    }
                                    className="w-full px-3 py-2 border rounded-md"
                                />
                            </div>

                            {/* Save Button */}
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-teal-600 text-white rounded-md"
                            >
                                Save Changes
                            </button>

                            {/* Cancel Button */}
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-md"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ExtraEditForm;