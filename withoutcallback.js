function uploadVideo(){
    console.log("Uploading Video");
    setTimeout(()=>{
        console.log("Uploading done"); 
    },5000)
}
function publishVideo(){
    console.log("publishing video");
    setTimeout(()=>{
        console.log("Published video is done");
    },5000)
}
function notificationSend(){
    console.log("Notification is send");
}
uploadVideo();
publishVideo();
notificationSend();