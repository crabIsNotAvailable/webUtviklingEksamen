import axios from "axios";
const ImageUploadService = (
    ()=>{
        // Har gjerne endepunkt(er) øverst i koden slik at man lett ser alle endepunktene Service gjør bruk av
        const imageUploadEndpoint = "http://localhost:5126/uploadImage";

        // Funksjonen skal ta imot bildet, som er en File
        const uploadImage = async (image: File) => {
            // Pakker bildet inn i et FormData-objekt
            const formData = new FormData();
            formData.append("file", image);

            const result = await axios({
                url: imageUploadEndpoint,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" } // PS! Ordet Content-Type er case-sensitivt!
            });

            // Viktig! Fjerner innholdet fra formData før neste bildeopplast!
            formData.delete("file");
        }

        return {
            uploadImage
        }
    }
)();
export default ImageUploadService;