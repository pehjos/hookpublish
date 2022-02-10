import React from "react";
function Share({ label, text, title }) {
    const canonical = document.querySelector("link[rel=canonical]");
    let url = canonical ? canonical.href : document.location.href;
    const shareDetails = { url, title, text };
    const [showModal, setShowModal] = useState(false);
    const handleSharing = async () => {
      if (navigator.share) {
        setShowModal(true)
        try {
          await navigator
            .share(shareDetails)
            .then(() =>
              console.log("Hooray! Your content was shared to tha world")
            );
        } catch (error) {
          console.log(`Oops! I couldn't share to the world because: ${error}`);
        }
      } else {
        setShowModal(true);
        // fallback code
        console.log(
          "Web share is currently not supported on this browser. Please provide a callback"
        );
      }
    };
    return (
        <>
          <button className="sharer-button" onClick={handleSharing}>
            <span className="sharer-button-text">{label}</span>
          </button>
      
          <ShareModal
            handleClose={setShowModal}
            shareData={shareDetails}
            modalVisible={showModal}
          />
        </>
      );

  }
export default Share;