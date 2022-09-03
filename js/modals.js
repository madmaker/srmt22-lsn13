function showModal (show) {  
    document.getElementById("modal-join-us").style.display=show?"grid":"none";
}

document.querySelector("#modal-join-us .close-cross-btn").addEventListener("click",()=>showModal(0))

document.getElementById("join-to-club").addEventListener("click",()=>showModal(1))

document.getElementById("modal-join-us").addEventListener("click",(e) => e.target==document.getElementById("modal-join-us")?showModal(0):{})