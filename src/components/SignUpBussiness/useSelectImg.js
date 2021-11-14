import {useState,useEffect} from 'react'

export const useSelectImg = () => {
    const [selectedBusinessprofiles, setSelectedBusinessprofiles] = useState()
    const [previewBusinessprofiles, setPreviewBusinessprofiles] = useState()
    const [selectedNationalOnCard, setSelectedNationalOnCard] = useState()
    const [previewNationalOnCard, setPreviewNationalOnCard] = useState()
    const [selectedNationalBehindCard, setSelectedNatiallCard] = useState()
    const [previewNationalBehindCard, setPreviewNationalBehindCard] = useState()

    const [selectedBusinessLicense, setSelectedBusinessLicense] = useState()
    const [previewBusinessLicense, setPreviewBusinessLicense] = useState()

  /*************************************************  selectedBusinessprofiles************************************** */
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedBusinessprofiles) {
            setPreviewBusinessprofiles(undefined)
            return
        }
  
        const objectUrl = URL.createObjectURL(selectedBusinessprofiles)
        setPreviewBusinessprofiles(objectUrl)
  
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedBusinessprofiles])
  
    const onSelectFileBusinessprofiles = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedBusinessprofiles(undefined)
            return
        }
  
        // I've kept this example simple by using the first image instead of multiple
        setSelectedBusinessprofiles(e.target.files[0])
    }
    /*************************************************  selectedBusinessprofiles************************************** */
  /*************************************************  selectedNationalOnCard************************************** */
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedNationalOnCard) {
            setPreviewNationalOnCard(undefined)
            return
        }
  
        const objectUrl = URL.createObjectURL(selectedNationalOnCard)
        setPreviewNationalOnCard(objectUrl)
  
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedNationalOnCard])
  
    const onSelectFileselectedNationalOnCard = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedNationalOnCard(undefined)
            return
        }
  
        // I've kept this example simple by using the first image instead of multiple
        setSelectedNationalOnCard(e.target.files[0])
    }
    /*************************************************  selectedBusinessprofiles************************************** */
  /*************************************************  selectedNationalBehindCard************************************** */
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedNationalBehindCard) {
            setPreviewNationalBehindCard(undefined)
            return
        }
  
        const objectUrl = URL.createObjectURL(selectedNationalBehindCard)
        setPreviewNationalBehindCard(objectUrl)
  
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedNationalBehindCard])
  
    const onSelectFileselectedNationalBehindCard = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedNatiallCard(undefined)
            return
        }
  
        // I've kept this example simple by using the first image instead of multiple
        setSelectedNatiallCard(e.target.files[0])
    }
    /*************************************************  selectedBusinessprofiles************************************** */
  /*************************************************  selectedBusinessLicense************************************** */
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedBusinessLicense) {
            setPreviewBusinessLicense(undefined)
            return
        }
  
        const objectUrl = URL.createObjectURL(selectedBusinessLicense)
        setPreviewBusinessLicense(objectUrl)
  
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedBusinessLicense])
  
    const onSelectFileselectedBusinessLicense= e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedBusinessLicense(undefined)
            return
        }
  
        // I've kept this example simple by using the first image instead of multiple
        setSelectedBusinessLicense(e.target.files[0])
    }
    /*************************************************  selectedBusinessprofiles************************************** */

    return{
        previewBusinessprofiles,
        selectedBusinessprofiles,
        onSelectFileBusinessprofiles,
        selectedNationalOnCard,
        previewNationalOnCard,
        onSelectFileselectedNationalOnCard,
        previewNationalBehindCard,
        selectedNationalBehindCard,
        onSelectFileselectedNationalBehindCard,
        previewBusinessLicense,
        selectedBusinessLicense,
        onSelectFileselectedBusinessLicense
    }
}

