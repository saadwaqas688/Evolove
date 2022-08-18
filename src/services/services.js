import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../config/Firebase/firebase";

  export const getService = async (path) => {

   return     await getDocs(collection(db, path));

  };


  export const deleteService = async (path,id) => {

  return      await deleteDoc(doc(db, path, id));

  };


   export const updateService = async (path,id,data) => {

        const washingtonRef = doc(db, path, id);
      
        return    await updateDoc(washingtonRef, data)
   
       };      
       

   export const postService = async (path,data) => {
      

        return  await addDoc(collection(db, path), data);

   
       };  

      export const deleteAsset = (assetUrl) => {
        
          const deleteRef = ref(storage, assetUrl);
          deleteObject(deleteRef)
            .then(() => {
           console.log('your asset is removed')
            })
            .catch((error) => {
              alert(error.message)
              console.log(error.message);
            });
        };


        export   const getServiceById = async(path,id) => {
          const docRef = doc(db, path, id);
          return await getDoc(docRef);
          };

          export   const getSubCollectionService = async(path,id,subCollection) => {
            return await getDocs(collection(db, path,id,subCollection));
            };




            export   const imagePostService =  async (image) =>  {

                    return new Promise(function(resolve, reject) {
                      const name2 = new Date().getTime() + "" + image.name;
                      const storageRef = ref(storage, "photos/" + name2);
                      const uploadTask = uploadBytesResumable(storageRef, image);
                      uploadTask.on('state_changed',
                        function(snapshot) {
                          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                          console.log('Upload is ' + progress + '% done')
                        },
                        (error) => {
                          console.log('error', error)

                          reject(error)

                       },
                        () => {
                          getDownloadURL(uploadTask.snapshot.ref).then(
                             (downloadURL) => {
                              resolve(downloadURL)
                             }
    
                            
                          );
                        }
                      )
                    })
    
            }


            export const postServiceByCoustomId = async (path,data,id) => {
      

              return  await setDoc(doc(db, path, id), data);

      
         
             };  