
export const FilePdf = () => {

    return (
        <div className="pdf">
            <object
                data={window.location.origin+'/docs/cv-FreddyLimachi.pdf'}
                type="application/pdf"
                width="100%"
                height="100%"
            >   
            </object>
        </div>
    )    
}