import React, { useState } from 'react';
import ImageUploadService from '../services/ImageUploadService.ts';
import TeamService from '../services/TeamService';

const AddTeam = ({ onAddTeam }) => {
  const [image, setImage] = useState(null);
  const [newTeam, setNewTeam] = useState({
      id: 0,
      name: "",
      imageName: "",
  });

  const [imageUploadStatus, setImageUploadStatus] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setNewTeam({ ...newTeam, imageName: file.name });
    };

    const handleAddNewTeam = async () => {
      setImageUploadStatus("Uploading image...");
      try {
          if (image != null) {
              await ImageUploadService.uploadImage(image);
          }
          setImageUploadStatus("Uploading image finished");
      } catch (error) {
          setImageUploadStatus("Upload failed");
      }
      try {
          const response = await TeamService.addTeam(newTeam);
          onAddTeam(newTeam);
          setNewTeam({ id: 0, name: "", imageName: "" });
      } catch (error) {
          console.log(error);
      }
  };
};

  export default AddTeam;